import styled from 'styled-components';
import '../../../../global.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92vh;
  .table {
    height: 72vh;
    font-family: "Londrina Solid", sans-serif;
    color: #FF5757;
    button {
      font-family: "Londrina Solid", sans-serif;
    }
    input {
      font-family: "Londrina Solid", sans-serif;
    }
    select {
      font-family: "Londrina Solid", sans-serif;
    }
    .rt-td {
      button{
        margin-right: 50%;
      }
    }
  }
`;

export const Content = styled.div`
  height: 90vh;
  display: flex;
  ul {
    width: 25vw;
  }
`;

export const Button = styled.button`
  margin-top: 5vh;
  width: 100%;
  height: 8vh;
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-red);
  font-size: 1.5vw;
`;

export const ContentOptions = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
`;

export const ButtonTable = styled.button`
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-red);
  font-size: 1.5vw;
`;
