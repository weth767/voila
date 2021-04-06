import styled from 'styled-components';

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

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  img {
    opacity: 0.7;
    width: 100%;
    height: 100vh;
    background-repeat: repeat-y;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 18vw;
  flex-direction: column;
  border: 2px solid var(--color-white);
  margin: 1vh 2vw;
  position: relative;
  background-color: #FF5757;
  span {
    color: white;
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

export const Button = styled.button`
  margin-top: 5vh;
  width: 50%;
  height: 5vh;
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-white);
  font-size: 16px;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  width: 50vw;
  height: 16vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1vh 2vw;
  position: relative;
`;

export const Select = styled.select`
  border-radius: 7px;
  position: relative;
  padding: 1vw;
  height: 8vh;
  width: 50%;
  margin-top: 1vh;
  border-color: var(--color-white);
  font-family: 'Londrina Solid', sans-serif;
  font-size: 16px;
  color: var(--color-white);
  background-color:var(--color-red);
  :focus {
    border-color: var(--color-white);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--color-red);
  }
`;

export const Input = styled.input`
  border-radius: 7px;
  padding: 1vw;
  height: 8vh;
  width: 50%;
  margin-top: 1vh;
  background-color: var(--color-red);
  color: var(--color-white);
  border-color: var(--color-white);
  font-family: 'Londrina Solid', sans-serif;
  font-size: 16px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--color-white);
    font-family: 'Londrina Solid', sans-serif;
    font-size: 14px;
  }
  :-ms-input-placeholder {
    color: var(--color-white);
    font-family: 'Londrina Solid', sans-serif;
  }

  :focus {
    color: var(--color-white);
    border-color: var(--color-red);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--color-red);
  }
`;
