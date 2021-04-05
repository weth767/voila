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

export const InternalContent = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
`;

export const Showroom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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

