import styled from 'styled-components';
import '../../../global.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  height: 90vh;
  display: flex;
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

export const ClientContent = styled.div`
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-red);
  width: 78vw;
  height: 20vh;
  margin-left: 1vw;
  margin-right: 1vw;
`;

export const TextContent = styled.div`
  margin-top: 1vh;
  display: flex;
  margin-bottom: 1vh;
  label {
    padding-left: 1vw;
    color: var(--color-red);
    font-family: 'Lily Script One', sans-serif;
  }
  span {
    margin-left: 1vw;
    color: var(--color-black);
    font-family: 'Londrina Solid', sans-serif;
  }
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  border: 2px solid var(--color-red);
  width: 78vw;
  height: 45vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-left: 1vw;
  margin-right: 1vw;
`;

export const Card = styled.div`
  display: flex;
  width: calc(100% - 4vw);
  flex-direction: column;
  border: 2px solid var(--color-red);
  margin: 1vh 2vw;
  position: relative;
  span {
    color: var(--color-red);
    width: 100%;
    margin-top: 0.5vh;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
  }
  p {
    width: 100%;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
  }
`;

export const ValueContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: var(--color-red);
    width: 100%;
    font-size: 1.5vw;
    margin-top: 0.5vh;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 76vw;
  button {
    margin-left: 3vw;
    height: 7vh;
    border-radius: 8px;
    color: var(--color-white);
    width: 100%;
    font-size: 1.5vw;
    margin-top: 0.5vh;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
    background-color: var(--color-red);
    border: 2px solid var(--color-white);
  }
`;
