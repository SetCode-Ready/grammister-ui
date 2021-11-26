import React from 'react'
import { Input, InputContainer } from './style'

interface InputProps {
    inputW: string
    name: string
    label: string
    erro?: string
    justify?: string
    align?: string
    margin?: string
    type: string
}


export default function InputComponent({inputW, name, label, justify, align, margin, erro, type}: InputProps) {
    return (
        <InputContainer inputW={inputW} justify={justify} align={align} margin={margin}>
            <label>{label}</label>
            <Input type={type} name={name} />
            {erro && (
                <p>{erro}</p>
            )}
        </InputContainer>
    )
}
