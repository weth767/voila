import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--color-red);
  display: flex;
  width: 100vw;
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
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const InternalContent = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
`;

export const HeaderImage = styled.div`
  img {
    width: 100vw;
    height: 90vh;
    opacity: 0.4;
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
  width: 100vw;
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

