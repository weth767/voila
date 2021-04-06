import styled from 'styled-components';

export const Content = styled.div`
  height: 90vh;
  display: flex;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: 'Londrina Solid', sans-serif;
  color: var(--color-red);
  font-size: 26px;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export const InternalContent = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  footer {
    width: 100vw;
  }
`;

export const HeaderImage = styled.div`
  img {
    width: 100vw;
    height: 90vh;
    opacity: 0.4;
    position: absolute;
  }
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

export const Span = styled.span`
  font-family: 'Londrina Solid', sans-serif;
  font-size: 1.5vw;
  margin-left: 1vw;
  margin-top: 1vh;
  position: relative;
`;

export const Input = styled.input`
  border-radius: 7px;
  padding: 1vh 1vw;
  height: 6vh;
  width: 50%;
  margin-top: 1vh;
  color: var(--color-red);
  border-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  font-size: 16px;
  position: relative;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--color-red);
    font-family: 'Londrina Solid', sans-serif;
    font-size: 14px;
  }
  :-ms-input-placeholder {
    color: var(--color-red);
    font-family: 'Londrina Solid', sans-serif;
  }

  :focus {
    border-color: var(--color-red);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--color-red);
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
    opacity: 0.55;
  }
  span {
    position: absolute;
    width: 100%;
    margin-top: 0.5vh;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
    font-weight: bold;
  }
  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: "Londrina Solid", sans-serif;
  }
`;

export const Button = styled.button`
  margin-top: 5vh;
  width: 50%;
  height: 5vh;
  position: relative;
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-red);
  font-size: 16px;
`;

