import styled from 'styled-components';
import BannerImage from '../../../assets/banner.png';
import '../../../global.css';

export const Title = styled.h1`
  font-family: 'Londrina Solid', sans-serif;
  color: var(--color-red);
  font-size: 2vw;
`;

export const Banner = styled.img`
  background-image: url(${BannerImage});
  width: 70vw;
  height: 100vh;
`;

export const Logo = styled.img`
  height: 256px;
  width: 256px;
  top: 0;
`;

export const Button = styled.button`
  margin-top: 5vh;
  width: 50%;
  height: 8vh;
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-red);
  font-size: 1.5vw;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled.span`
  font-family: 'Londrina Solid', sans-serif;
  font-size: 1.35vw;
  font-weight: bold;
  margin-left: 1vw;
  margin-top: 1vh;
  a {
    color: var(--color-red);
    text-decoration: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-red);
  width: 50%;
  height: 100vh;
`;

export const Input = styled.input`
  border-radius: 7px;
  padding: 1vw;
  height: 7vh;
  width: 50%;
  margin-top: 1vh;
  border-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  font-size: 1.2vw;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--color-red);
    font-family: 'Londrina Solid', sans-serif;
    font-size: 1.2vw;
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
