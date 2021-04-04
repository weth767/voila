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

export const Menu = styled.ul`
  width: 20vw;
  border: 1px solid var(--color-red);
  overflow-y: scroll;
  height: 92vh;
  padding: 1vh 0;
  list-style: none;
  background-color: var(--color-lightgray);

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--color-red);
  border-top: 1px solid var(--color-red);
  padding: 2vh 1vw;
  span {
    margin-left: 1vw;
    font-family: "Londrina Solid", sans-serif;
    color: var(--color-red);
  }
`;

export const InternalContent = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-red);
  margin: 1vh 2vw;
  position: relative;
  img {
    width: 15vw; 
    opacity: 0.6;
  }
  span {
    position: absolute;
    width: 100%;
    margin-top: 0.5vh;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
  }
  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
  }
`;
