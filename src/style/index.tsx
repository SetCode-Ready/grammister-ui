import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Cairo', sans-serif;
    }

    body{
        width: 100vw;
        background: #441276;
    }
` 

export default GlobalStyle;