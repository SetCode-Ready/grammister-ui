import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4%;

    *{
        color: #FFD9CD
    }

    h2{
        font-size: 30px;
        font-weight: 400;
    }
`

export const HomeLink = styled(Link)`
    
`