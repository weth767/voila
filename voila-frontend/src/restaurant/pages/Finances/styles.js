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
  flex-direction: column;
  width: 80vw;
  height: 80vh;
`;

export const DatePickerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  input {
    border-radius: 7px;
    padding: 1vw;
    height: 8vh;
    margin-top: 1vh;
    margin-right: 1vw;
    margin-bottom: 1vh;
    border-color: var(--color-red);
    font-family: 'Londrina Solid', sans-serif;

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
  }
`;

export const Label = styled.label`
  color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  font-size: 1.5vw;
  margin-right: 1vw;
`;

export const Button = styled.button`
  width: 10vw;
  height: 8vh;
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-red);
`;

export const FinancesContent = styled.div`
  display: flex;
`;

export const FinancesList = styled.ul`
  list-style: none;
  padding: 1vh 1vw;
  border: 1px solid var(--color-red);
  width: 26.66vw;
  height: 74vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FinanceListTitle = styled.li`
  font-family: "Londrina Solid", sans-serif;
  font-size: 2.3vw;
  color: var(--color-red);
  text-align: center;
`;

export const FinanceListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid var(--color-red);
  padding: 1vh 1vw;
  margin-bottom: 1vh;
  span {
    font-family: "Londrina Solid", sans-serif;
    font-weight: lighter;
    margin-left: 1vw;
  }
`;
