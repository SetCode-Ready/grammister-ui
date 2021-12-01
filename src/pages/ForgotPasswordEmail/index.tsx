/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Formik, FormikErrors, FormikValues } from "formik";
import {
  ButtonContainer,
  FormContainer,
  Input,
  InputContainer,
  MainContainer,
  Title,
} from "./style";
import { Button } from "../../components/Button/style";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import api from "../../config/Axios";
import { AuthContext } from "../../context/Auth";
import jwt_decode from 'jwt-decode';

interface InputProps {
  email: string;
}

interface UserProps {
  username: string;
  email: string;
  id: string;
}

export default function ForgotPasswordEmail() {
  const [user, setUser] = useState<UserProps>();

  const initialValues = {
    email: ""
  };

  const {getTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage('token')

  const history = useHistory()

  useEffect(() => {

    const user: UserProps = jwt_decode(token)
    setUser(user)

  }, [history, token])

  // function validate(values: InputProps) {
  //   let errors: FormikErrors<FormikValues> = {};

  //   if (!values.email) {
  //     errors.email = "Digite seu email!";
  //   }

  // }

  // useEffect(() => {
  //   if (data) {
  //     history.push("/");
  //     toast.dismiss();
  //   }
  // }, [data]);

  return (
    <MainContainer>
      <Formik
        // validate={validate}
        initialValues={initialValues}
        onSubmit={async (values) => {
          // if(!values.email){
          //   toast.error("informe seu email")
          //   return
          // }

          // try{
          //   api.post("/forgot-password", {})

          //   toast.loading("Recuperando...")
          // } catch(e){
          //   console.log(e)
          // }

          toast.success("senha recuperada!")
          history.push("/")
        }}
      >
        <FormContainer>
          <Title>Recupere sua senha</Title>

          <InputContainer inputW="50">
            <label>Digite o email da sua conta:</label>
            <Input name="email" />
          </InputContainer>

          <ButtonContainer>
            <Button>Recuperar</Button>
          </ButtonContainer>

        </FormContainer>
      </Formik>
    </MainContainer>
  );
}
