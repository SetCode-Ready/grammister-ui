import {Form} from 'formik'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    margin: auto;
    padding: 50px 0 20px 0; 
`

export const FormContainer = styled(Form)`
    width: 40vw;
    height: 100%;
    background-color: #5E19A2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    max-height: 700px;
    min-height: 500px;

    min-width: 350px;

    @media(max-width: 1100px){
        margin-top: 5%;
    }
`
export const ForgotContainer = styled.div`
    width: 70%;
    height: 5%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const ForgotLink = styled(Link)`
    text-decoration: underline;
    transition: 0.5s;
    &:hover{
        color: #441276;
    }
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
    margin: 0.5% 0.5%;
    background-color: #F46036;
    border-radius: 10px;
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    &:hover{
        background-color: #441276;
    }
`

export const SignUpLabel = styled(Link)`
    margin: 1.5%;
    transition: 0.5s;
    text-decoration: underline;

    h2{
        min-width: 450px;
    }

    &:hover{
        color: #441276;
    }
`

export const InfoContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        padding: 5% 0;
        margin: 0 auto;
    }
    img{
        width: 600px;
    }
`

export const MainContainer = styled.main`
    margin: 2% auto;
    height: 91vh;
    width: 85vw;
    display: flex;
    flex-direction: row;

    *{
        color: #FFD9CD;
    }

    @media(max-width: 1100px){
        flex-direction: column;
        align-items: center;

        ${FormContainer}{
            min-height: 600px;
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