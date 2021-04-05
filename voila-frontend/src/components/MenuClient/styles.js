import styled from 'styled-components';

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
