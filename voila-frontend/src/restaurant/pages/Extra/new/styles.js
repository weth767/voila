import styled from 'styled-components';
import '../../../../global.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92vh;
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
`;

export const Menu = styled.ul`
  width: 25vw;
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
