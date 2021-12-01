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
        width: 100%;
        background: #441276;
    }

    input::placeholder {
        color: white;
    }

    .SearchMusicModal{
        background-color: #441276;
        width: 70vw;
        height: 70vh;
        padding: 2rem;
        position: relative;
        border-radius: 0.5rem;
    }

    .SearchMusicModalOverlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .CloseModal{
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
        transition: 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }

    .inverted{
        transition: 0.2s;
        transform: rotate(180deg)
    }
` 

export default GlobalStyle;