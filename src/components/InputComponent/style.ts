import { Field } from 'formik';
import styled from "styled-components";

type InputProps = {
    inputW: string
    justify?: string
    align?: string
    margin?: string
}

export const InputContainer = styled.fieldset<InputProps>`
    margin: ${props => props.margin || 'none'};
    border: 0;
    width: ${props => props.inputW}%;
    height: 20%;
    display: flex;
    justify-content: ${props => props.justify || 'none'};
    align-items: ${props => props.align || 'none'};;
    flex-direction: column;

    label{
        font-size: 20px;
        font-weight: bold;
        text-align: start;
    }

    p{
        padding: 1%;
    }
`

export const Input = styled(Field)`
    width: 100%;
    height: 10%;
    padding: 24px;
    border: 0;
    background-color: #B793FF;
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`