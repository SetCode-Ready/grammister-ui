import { Field, Form } from 'formik'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface InputProps {
    inputW:string
}

export const MainContainer = styled.main`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    margin-top: 1%;
    justify-content: center;

    *{
        color: #FFD9CD;
        overflow-x: hidden;
    }
`

export const FormContainer = styled(Form)`
    width: 60%;
    height: auto;
    background-color: #5E19A2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1% 0;

    min-height: 600px;
    min-width: 350px;
`

export const Title = styled.h2`
    margin-top: 2%;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
;
`

export const InputContainer = styled.fieldset<InputProps>`
    border: 0;
    width: ${props => props.inputW}%;
    padding: 0.75%;
    display: flex;
    flex-direction: column;

    label{
        font-size: 20px;
        font-weight: bold;
        text-align: start;
    }
    `
export const Input = styled(Field)<any>`
    width: 100%;
    padding: 1%;
    border: 0;
    background-color: #B793FF;
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ButtonContainer = styled.div`
    margin: 2rem auto;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
`

export const AccountLink = styled(Link)`
    margin: auto;
    text-align: center;
    text-decoration: underline;
    transition: 0.5s;

    &:hover{
        color: #441276
    }
`

export const DualInputContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 30%;
    display: flex;
    justify-content: space-between;

    ${Input}{
        padding: 2%;
    }

    @media(max-width: 800px){
        flex-direction: column;
        justify-content: space-around;

        ${InputContainer}{
            width: 100%;
            height: 50%;
        }

        ${ButtonContainer}{
            padding: 5%;
        }
    }
`