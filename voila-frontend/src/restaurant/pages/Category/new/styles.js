import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92vh;
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
  width: 98%;
  margin-left: 1%;
  height: 8vh;
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-red);
  font-size: 1.5vw;
`;

export const Input = styled.input`
  border-radius: 7px;
  padding: 1vw;
  height: 8vh;
  width: 50%;
  margin-top: 1vh;
  border-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  font-size: 16px;

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

export const Select = styled.select`
  border-radius: 7px;
  padding: 1vw;
  height: 8vh;
  width: 50%;
  margin-top: 1vh;
  border-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  font-size: 16px;
  color: var(--color-red);
  background-color:var(--color-white);
  :focus {
    border-color: var(--color-red);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--color-red);
  }
`;

export const Form = styled.form`
  padding:2vh;
  display:flex;
  width:100%;
`;

export const TitleForm = styled.div`
  font-family: 'Lily Script One', sans-serif;
  font-size: 3vw;
  color: var(--color-red);
  margin-right: 5vw;
  padding: 0 2vw;
  border-right: 1px solid white;
`;
