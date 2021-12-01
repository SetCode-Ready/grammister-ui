/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect} from "react";
import {
  ForgotContainer,
  FormContainer,
  MainContainer,
  LogoContainer,
  ExternalLoginContainer,
  OathButton,
  InfoContainer,
  SignUpLabel,
  ForgotLink,
} from "./style";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import GoogleLogo from "../../assets/google_logo.png";
import FaceBookLogo from "../../assets/Facebook Icon.png";
import AsideImage from "../../assets/aside_image_home.png";
import { Formik, FormikErrors, FormikValues } from "formik";
import toast from "react-hot-toast";
import InputComponent from "../../components/InputComponent";
import { Button } from "../../components/Button/style";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../Graphql";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/Auth";

interface FormInputs {
  email: String;
  password: String;
}

export default function Home() {
  const [login, { data, loading,  }] = useMutation(LOGIN_USER, {
    errorPolicy: "all",
  });

  const history = useHistory();

  const { saveTokenOnLocalStorage } = useContext(AuthContext);

  function GoogleLogIn() {
    console.log("Login Com Google");
  }

  function FacebookLogIn() {
    console.log("Login Com Facebook");
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      saveTokenOnLocalStorage('token', data.login.token);
      saveTokenOnLocalStorage('userId', data.login.id)
      history.push("/feed");
      toast.dismiss();
    }
  }, [data]);

  async function MainLogin(values: FormInputs) {
    const { email, password } = values;

    try {
      login({
        variables: {
          email,
          password,
        },
      });

      
    } catch (error: any) {
      toast.dismiss()
      console.log(error.message);
    }
  }

  

  useEffect(() => {
    if(loading){
      toast.loading("Logando...", {
        duration: 1000
      })
    }
  }, [loading])

  function validate(values: FormInputs) {
    let errors: FormikErrors<FormikValues> = {};

    if (!values.email) {
      errors.email = "Digite seu email!";
    }

    if (!values.password) {
      errors.password = "Digite sua senha!";
    }

    return errors;
  }

  const initialValues = { email: "", password: "", btn: "" };

  return (
    <MainContainer>
      <Formik
        validate={validate}
        initialValues={initialValues}
        onSubmit={(values) => {
          switch (values.btn) {
            case "main":
              MainLogin(values);
              break;
            case "google":
              GoogleLogIn();
              break;
            case "facebook":
              FacebookLogIn();
              break;
            default:
              toast.error("Erro desconhecido informe aos desenvolvedores");
          }
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <FormContainer>
            <LogoContainer>
              <Logo width="150px" />
            </LogoContainer>

            <InputComponent
              inputW="70"
              name="email"
              type={"email"}
              label="Email:"
              erro={errors.email}
            />

            <InputComponent
              inputW="70"
              type={"password"}
              name="password"
              label="Senha:"
              erro={errors.password}
            />

            <ForgotContainer>
              <ForgotLink to="/forgot_password">Esqueceu sua senha?</ForgotLink>
            </ForgotContainer>

            <Button
              onClick={() => {
                setFieldValue("btn", "main");
              }}
            >
              Entrar
            </Button>

            <label>ou entre com:</label>

            <ExternalLoginContainer>
              <OathButton
                type="submit"
                onClick={() => setFieldValue("btn", "google")}
              >
                <img src={GoogleLogo} alt="Google logo" />
              </OathButton>

              <OathButton
                type="submit"
                onClick={() => setFieldValue("btn", "facebook")}
              >
                <img src={FaceBookLogo} alt="Facebook logo" />
              </OathButton>
            </ExternalLoginContainer>

            <SignUpLabel to="/register">
              É novo por aqui! saiba como se cadastrar{" "}
            </SignUpLabel>
          </FormContainer>
        )}
      </Formik>

      <InfoContainer>
        <h2>
          Sua Música, Seu Lugar, Seus
          <br />
          Momentos e Seus Amigos...
        </h2>

        <img
          src={AsideImage}
          alt="Imagem de um vinil saindo da caixa e um gramophone na capa do vinil"
        />
      </InfoContainer>
    </MainContainer>
  );
}
