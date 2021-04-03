import styled from 'styled-components';
import '../../../global.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  background-color: var(--color-red);
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;
`;

export const Title = styled.div`
  font-family: 'Lily Script One', sans-serif;
  font-size: 3vw;
  color: white;
  margin-right: 5vw;
  padding: 0 2vw;
  border-right: 1px solid white;
`;

export const Logo = styled.img`
`;

export const UserLogo = styled.img`
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserSpan = styled.span`
  text-align: center;
  color: white;
  font-family: 'Lily Script One', sans-serif;
  font-size: 1.5vw;
`;

export const Options = styled.button`
  margin-left: 72vw;
  border: none;
  background: none !important;
`;

export const Content = styled.div`
`;

export const Menu = styled.ul`
  width: 20vw;
  border: 1px solid var(--color-red);
  overflow-y: scroll;
  height: 100vh;
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
  margin-top: 1vh;
  padding: 2vh 1vw;
  span {
    margin-left: 1vw;
    font-family: "Londrina Solid", sans-serif;
    color: var(--color-red);
  }
`;

export const OrderContent = styled.div`

`;

export const OrderList = styled.ul`

`;

export const OrderItem = styled.li`

`;

export const Footer = styled.footer`
  border: 1px solid var(--color-red);
  padding: 2vh 1vw;
`;

