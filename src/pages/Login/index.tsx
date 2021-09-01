import React from 'react'
import { Formik, FormikErrors, FormikValues } from 'formik'
import { AccountLink, ButtonContainer, DualInputContainer, FormContainer, Input, InputContainer, MainContainer, Title } from './style'
import { Button } from '../../components/Button/style'
import toast from 'react-hot-toast'

interface InputProps{
  name: string
  email: string
  password: string
  confirmPassword: string
  birth: string
  genre: string
}

export default function Login() {
    
    const initialValues = {name: "", email: "", password: "", confirmPassword: "", birth: "", genre: ""}
    
    function validate(values: InputProps){
      let errors: FormikErrors<FormikValues> = {}

      if(!values.birth){
        errors.email = "Digite sua data de nascimento!"
      }
      if(!values.email){
        errors.email = "Digite seu email ou telefone!"
      }
      if(!values.password){
        errors.password = "Digite sua senha!"
      }
      if(!values.confirmPassword){
        errors.confirmPassword = "Confirme sua senha!"
      }
      if(!values.genre){
        errors.genre = "Informe seu genero!"
      }
      if(!values.name){
        errors.name = "Informe seu nome!"
      }
    }

    return (
        <MainContainer>
          <Formik
            validate={validate}
            initialValues={initialValues}
            onSubmit={(values) => {
              if(!values.genre){
                toast.error("Informe seu genero!")
              }
              if(!values.birth){
                toast.error("Digite sua data de nascimento!")
              }
              if(!values.password){
                toast.error("Digite sua senha!")
              }
              if(!values.confirmPassword){
                toast.error("Confirme sua senha!")
              }
              if(!values.email){
                toast.error("Digite seu email ou telefone!")
              }
              if(!values.name){
                toast.error("Informe seu nome!")
              }
            }}
          >
              <FormContainer>
              <Title>Cadastro</Title>

              <InputContainer inputW="90">
                  <label>Nome Completo:</label>
                  <Input  name="name"/>
              </InputContainer>
              
              <InputContainer inputW="90">
                  <label>Email:</label>
                  <Input  name="email"/>
              </InputContainer>

              <DualInputContainer>
                
                <InputContainer inputW="48">
                  <label>Senha:</label>
                  <Input type="password" name="password" />
                </InputContainer>

                <InputContainer inputW="48" >
                  <label>Confirmar senha:</label>
                  <Input type="password" name="confirmPassword" />
                </InputContainer>
              
              </DualInputContainer>

              <DualInputContainer>

                <InputContainer inputW="48">
                  <label>Data de nascimento:</label>
                  <Input type="date" name="birth" />
                </InputContainer>
                
                <InputContainer inputW="48" >
                  <label>Genero:</label>
                  <Input type="text" name="genre" />
                </InputContainer>
              
              </DualInputContainer>
              
              <ButtonContainer>
                <Button type="submit" >Entrar</Button>
              </ButtonContainer>

              <AccountLink to="/" >Já possui conta? Faça login agora mesmo!</AccountLink>
            </FormContainer>
          </Formik>  
        </MainContainer>
    )
}
