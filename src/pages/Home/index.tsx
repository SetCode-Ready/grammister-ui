import React from 'react'
import { ForgotContainer, Form, Input, InputContainer, LoginButton, MainContainer, LogoContainer, ExternalLoginContainer, OathButton, InfoContainer, SignUpLabel } from './style'
import {ReactComponent as Logo } from '../../assets/Logo.svg' 
import GoogleLogo from '../../assets/google_logo.png' 
import FaceBookLogo from '../../assets/Facebook Icon.png' 
import AsideImage from '../../assets/aside_image_home.png' 

export default function Home() {

    function GoogleLogIn(){
        alert('Login Com Goolge')
    }

    function FacebookLogIn(){
        alert('Login Com Facebook')
    }

    function MainLogin(){
        alert('Login Principal')
    }

    return (
        <MainContainer>
            <Form>
                <LogoContainer>
                    <Logo width="150px" />
                </LogoContainer>

                <InputContainer>
                    <label>Email ou celular:</label>
                    <Input/>
                </InputContainer>
                
                <InputContainer>
                    <label>Senha:</label>
                    <Input/>
                </InputContainer>

                <ForgotContainer>
                    <p>Esqueceu sua senha?</p>
                </ForgotContainer>

                <LoginButton onClick={MainLogin} >Entrar</LoginButton>

                <label>ou entre com:</label>
                
                <ExternalLoginContainer>
                    <OathButton onClick={GoogleLogIn} >
                        <img src={GoogleLogo} alt="Google logo" />
                    </OathButton>

                    <OathButton onClick={FacebookLogIn} >
                        <img src= {FaceBookLogo} alt="Facebook logo" />
                    </OathButton>
                </ExternalLoginContainer>
                
                <SignUpLabel to="/login">É novo por aqui! saiba como se cadastrar </SignUpLabel>
            </Form>

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
