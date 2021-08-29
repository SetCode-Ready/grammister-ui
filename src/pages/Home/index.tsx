import React from 'react'
import { ForgotContainer, Input, FormContainer, InputContainer, LoginButton, MainContainer, LogoContainer, ExternalLoginContainer, OathButton, InfoContainer, SignUpLabel, Error } from './style'
import {ReactComponent as Logo } from '../../assets/Logo.svg' 
import GoogleLogo from '../../assets/google_logo.png' 
import FaceBookLogo from '../../assets/Facebook Icon.png' 
import AsideImage from '../../assets/aside_image_home.png' 
import { ErrorMessage, Formik, FormikErrors, FormikValues } from 'formik'
import toast from 'react-hot-toast'

interface FormInputs{
    email: String;
    password: String;
}

export default function Home() {

    function GoogleLogIn(){
        console.log('Login Com Goolge')

        
    }

    function FacebookLogIn(){
        console.log('Login Com Facebook')
    }

    function MainLogin(values: FormInputs){

        const {email, password} = values
        console.log(email, password)
    }

    function validate(values: FormInputs){
        let errors:FormikErrors<FormikValues> = {}

        if(!values.email){
            errors.email = "Digite seu email!"
        }

        if(!values.password){
            errors.password = "Digite sua senha!"
        }

        return errors
    }

    const initialValues = {email: '', password: '', btn: ''}

    return (
        <MainContainer>
            <Formik
                validate={validate}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    switch(values.btn){
                        case 'main':
                            MainLogin(values);
                            break;
                        case 'google':
                            GoogleLogIn()
                            break;
                        case 'facebook':
                            FacebookLogIn()
                            break;
                        default:
                            toast.error("Erro desconhecido informe aos desenvolvedores")
                    }
                }}
            >
                {({
                setFieldValue,
                errors,
                touched
                }) => (
                    <FormContainer>
                        <LogoContainer>
                            <Logo width="150px" />
                        </LogoContainer>

                        <InputContainer>
                            <label>Email ou celular:</label>
                            <Input type="email" name="email" />
                            {errors.email && (
                                <Error>{errors.email}</Error>
                            )}
                        </InputContainer>
                        
                        <InputContainer>
                            <label>Senha:</label>
                            <Input type="text" name="password" />
                            {errors.password && touched && (
                                <Error>{errors.password}</Error>
                            )}
                        </InputContainer>

                        <ForgotContainer>
                            <p>Esqueceu sua senha?</p>
                        </ForgotContainer>

                        <LoginButton onClick={() => {setFieldValue('btn', 'main')}} >Entrar</LoginButton>

                        <label>ou entre com:</label>
                        
                        <ExternalLoginContainer>
                            <OathButton type="submit" onClick={() => setFieldValue('btn', 'google')} >
                                <img src={GoogleLogo} alt="Google logo" />
                            </OathButton>

                            <OathButton type="submit" onClick={() => setFieldValue('btn', 'facebook')} >
                                <img src= {FaceBookLogo} alt="Facebook logo" />
                            </OathButton>
                        </ExternalLoginContainer>
                        
                        <SignUpLabel to="/login">É novo por aqui! saiba como se cadastrar </SignUpLabel>
                    </FormContainer>
                )}
                
            </Formik>

            <InfoContainer>
                <h2>
                Sua Música, Seu Lugar, Seus
                <br/>
                Momentos e Seus Amigos...
                </h2>

                <img src={AsideImage} alt="Image de um vinil saindo da caixa e um gramphone na capa do vinil"/>
            </InfoContainer>
        </MainContainer>
    )
}
