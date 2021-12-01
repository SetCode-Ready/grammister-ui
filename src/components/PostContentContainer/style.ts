import styled from 'styled-components';

export const PostContentContainerWrapper = styled.div`
    width: 90%;
    background-color: #441276;
    margin: 1rem auto;
    border-radius: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`

interface PostContainerProps {
    height?: boolean
}

export const PostContainer = styled.div<PostContainerProps>`
    height: ${(props) => props.height ? 'auto' : '7rem'};
    padding-right: 0.2rem;
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 1rem;
    overflow-x: auto;
    flex-grow: 3;

    ::-webkit-scrollbar{
        background-color: transparent;
        width: 0.4rem;
        margin: 0.5rem;
    }
    ::-webkit-scrollbar-thumb{
        background: #F46036;
        border-radius: 1rem;
    }

    p{
        color: #f2f2f2;
    }
`

export const UserInfo = styled.div`
    flex-grow: 1;
    width: 90%;
    padding: 2rem;
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0;

    div{
        padding-left: 0.5rem;
    }

`

export const PostImg = styled.img`
    width: 70px;
    height: 100%;
    border-radius: 1rem;
`

interface StyledPProps{
  size: number
  color: string
  bold: number
}

export const StyledP = styled.p<StyledPProps>`
  font-size: ${({size}) => size +'px'};
  color: ${({color}) => color};
  font-weight: ${({bold}) => bold};
  display: flex;
  align-items: center;
  

  svg{
      margin: 0.3rem;
  }

  &:last-child{
      margin-top: -0.5rem;
  }
`

export const IconsContainer = styled.div`
    padding-top: 1rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    img{
        cursor: pointer;
        width: 3rem;
        height: 3rem;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p{
            color: #f2f2f2;
        }
    }

`

export const DetailContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: #5E19A2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: filter 0.2s;

    svg{
        width: 30px;
        transition: 0.2s;

        &.rotate{
            transform: rotate(180deg);
        }
    }

    &:hover{
        filter: brightness(0.9);
    }
`