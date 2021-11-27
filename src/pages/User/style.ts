import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 5vh auto;
  width: 90%;
  height: auto;
`

export const UserContainer = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #5E19A2;
  border-radius: 1rem;
  display: flex;


  div.UserActions{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    img{
        &.profile{
            margin-top: 5%;
            width: 130px;
            height: 130px;
        }
    }

    p{
      font-size: 24px;
      text-align: center;
      width: auto;
      padding: 0.25rem 1rem;
      border-radius: 1rem;
      background-color: #FFD9CD;
      color: #441276;
      cursor: pointer;
      font-weight: bold;
      transition: 0.2s;

      &:hover{
        background-color: #441276;
      color: #FFD9CD;
      }
    }
  }

  div.UserDetails{
    height: 70%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
      color: #F9F8F8;
      font-size: 24px;
      font-weight: bold;
    }

    h5{
      color: #F9F8F8;
    }

    h6{
      color: #F9F8F8;
    }
  }

`

export const PostsContainer = styled.div`
  padding-top: 1.5rem;
  width: 100%;
  height: auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 2fr;
  margin-top: 1rem;
  background-color: #5E19A2;
  border-radius: 1rem;
`