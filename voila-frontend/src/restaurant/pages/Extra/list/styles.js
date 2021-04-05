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

export const Span = styled.span`
  font-family: 'Londrina Solid', sans-serif;
  font-weight: bold;
  margin-left: 1vw;
  margin-top: 1vh;
  a {
    color: var(--color-red);
    text-decoration: none;
  }
`;

export const Header = styled.header`
  background-color: var(--color-red);
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;
  height: 8vh;
  img {
    height: 8vh;
    width: 4vw;
  }
`;

export const Title = styled.div`
  font-family: 'Lily Script One', sans-serif;
  font-size: 3vw;
  color: white;
  margin-right: 5vw;
  padding: 0 2vw;
  width: 16vw;
  border-right: 1px solid white;
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 2vw;
    width: 36px;
    height: 36px;
  }
`;

export const UserSpan = styled.span`
  text-align: center;
  color: white;
  font-family: 'Lily Script One', sans-serif;
  font-size: 1.5vw;
`;

export const Options = styled.button`
  position: absolute;
  right: 1%;
  border: none;
  background: none !important;
`;

export const Content = styled.div`
  height: 90vh;
  display: flex;
  ul {
    width: 25vw !important;
  }
  footer {
    margin-left: 20vw;
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
