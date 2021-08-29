import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    margin: auto;
`

export const Form = styled.form`
    width: 40vw;
    height: 100%;
    background-color: #5E19A2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 350px;
`

export const InputContainer = styled.fieldset`
    margin: -3% auto;
    border: 0;
    width: 70%;
    height: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    

    label{
        font-size: 24px;
        text-align: start;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 40%;
    padding: 1.5%;
    border: 0;
    background-color: #B793FF;
    border-radius: 10px;
    font-size: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ForgotContainer = styled.div`
    width: 70%;
    height: 5%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const LoginButton = styled.button`
    cursor: pointer;
    width: 40%;
    padding: 3%;
    background-color: #F46036;
    border-radius: 10px;
    border: 0;
    font-size: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ExternalLoginContainer = styled.div`
    width: 80%;
    height: 8%;
    display: flex;
    justify-content: center;
`

export const OathButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 25%;
    padding: 3%;
    margin: 1% 1%;
    background-color: #F46036;
    border-radius: 10px;
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const InfoContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 600px;
    }
`

export const SignUpLabel = styled(Link)`
    margin: 3%;
    transition: 3s;

    &:hover{
        text-decoration: underline;
        transition: 3s;
    }

    h2{
        min-width: 450px;
    }
`  

export const MainContainer = styled.main`
    margin: 2% auto;
    height: 90vh;
    width: 85vw;
    display: flex;
    flex-direction: row;

    *{
        color: #FFD9CD;
    }

    @media(max-width: 1100px){
        flex-direction: column;
        align-items: center;

        ${Form}{
            margin-top: 5%;
        }

        ${InfoContainer}{
            margin: 5% 0%;

            img{
                width: 500px;
            }           
        }
    }

    @media(max-width: 600px){
        ${InfoContainer}{
            img{
                width: 400px;
            }           
        }
    }
`