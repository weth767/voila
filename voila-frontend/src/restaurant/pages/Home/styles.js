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

export const OrderContent = styled.div`
  display: flex;
  width: 80vw;
`;

export const OrderList = styled.ul`
  list-style: none;
  padding: 1vh 1vw;
  border: 1px solid var(--color-red);
  width: 26.66vw;
  height: 84vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const OrderTitle = styled.li`
  font-family: "Londrina Solid", sans-serif;
  font-size: 2.3vw;
  color: var(--color-red);
  text-align: center;
`;

export const OrderItem = styled.li`
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

