import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 1.8rem auto;
  width: 90%;
  height: 90vh;
  border-radius: 1rem;
  background-color: #5E19A2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr;
  gap: 1rem;
  padding: 1rem;
`

export const LeftContainer = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: #441276;
`

export const BottomLeftContainer = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: #441276;
`

export const WrapperContainer = styled.div`
  width: 80%;
  height: 17rem;
  margin: 0 auto;
  overflow-x: auto;

  ::-webkit-scrollbar{
        background-color: transparent;
        width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb{
        background: #5E19A2;
        border-radius: 1rem;
    }
`

export const RightContainer = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: #441276;
  grid-column: 2/2;
  grid-row: 1/3;

  h1{
    color: #f2f2f2;
  }

`

export const TopContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
`

export const CommentsContainer = styled.div`
  min-width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;

  img.User{
    width: 4rem;
    border-radius: 1rem;
  }

  div{
    min-width: 10%;
    color: #f2f2f2;
    line-height: 1.5rem;
  }

  div.ButtonContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    img{
      padding: 0.2rem;
      cursor: pointer;
      width: 2.5rem;
    }
  }

  & + div {
    margin-top: 1.5rem;
  }

`

