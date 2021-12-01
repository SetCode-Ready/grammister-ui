/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Formik, FormikErrors, FormikValues } from "formik";
import {
  AccountLink,
  ButtonContainer,
  DualInputContainer,
  FormContainer,
  Input,
  InputContainer,
  MainContainer,
  Title,
} from "./style";
import { Button } from "../../components/Button/style";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../Graphql";
import { useHistory } from "react-router";
import api from "../../config/Axios";
import { AuthContext } from "../../context/Auth";
import jwt_decode from 'jwt-decode';

interface InputProps {
  password: string;
  confirmPassword: string;
}

interface UserProps {
  username: string;
  email: string;
  id: string;
  // moment_music: string;
  // album_artist: string;
  // recent_reproduction: music[];
}

export default function ForgotPassword() {
  const [user, setUser] = useState<UserProps>();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const {getTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage('token')

  const history = useHistory()

  useEffect(() => {

    const user: UserProps = jwt_decode(token)
    setUser(user)

  }, [history, token])

  function validate(values: InputProps) {
    let errors: FormikErrors<FormikValues> = {};

    if (!values.password) {
      errors.password = "Digite sua senha!";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirme sua senha!";
    }

  }

  // useEffect(() => {
  //   if (data) {
  //     history.push("/");
  //     toast.dismiss();
  //   }
  // }, [data]);

  return (
    <MainContainer>
      <Formik
        validate={validate}
        initialValues={initialValues}
        onSubmit={async (values) => {
          if (!values.password) {
            toast.error("Digite sua senha!");
            return;
          }
          if (!values.confirmPassword) {
            toast.error("Confirme sua senha!");
            return;
          }
          if(values.password.length < 6){
            toast.error("informe uma senha com mais de 6 caracteres")
            return
          }

          try{
            api.get("/reset-password/:userId/:token")

            toast.loading("Recuperando...")
          } catch(e){
            console.log(e)
          }
        }}
      >
        <FormContainer>
          <Title>Recupere sua senha</Title>

          <InputContainer inputW="50">
            <label>Digite a nova senha:</label>
            <Input name="password" />
          </InputContainer>

          <InputContainer inputW="50">
            <label>confirme a sua senha:</label>
            <Input name="confirmPassword" />
          </InputContainer>

          <ButtonContainer>
            <Button>Recuperar</Button>
          </ButtonContainer>

        </FormContainer>
      </Formik>
    </MainContainer>
  );
}
