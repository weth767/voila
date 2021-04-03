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

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 80vw;
  height: 8vh;
  border: 1px solid var(--color-red);
  border-left: none;
  padding: 2vh 1vw;
  background: var(--color-mediumgray);
  font-family: "Londrina Solid", sans-serif;
  font-size: 1.5vw;
  text-align: center;
  color: var(--color-red)
`;

