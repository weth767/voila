import styled from 'styled-components';
import BannerImage from "../../../assets/banner.png";

export const Title = styled.h1`
  font-family: 'Londrina Solid', sans-serif;
  color: var(--color-red);
  font-size: 26px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled.span`
  font-family: 'Londrina Solid', sans-serif;
  font-size: 1.5vw;
  font-weight: bold;
  margin-left: 1vw;
  margin-top: 1vh;
  a {
    color: var(--color-red);
    text-decoration: none;
  }
`;

export const Banner = styled.img`
  background-image: url(${BannerImage});
  width: 70vw;
  height: 100vh;
`;

export const Logo = styled.img`
  height: 20vh;
  width: 10vw;
`;

export const Button = styled.button`
  margin-top: 5vh;
  width: 50%;
  height: 5vh;
  border-radius: 7px;
  color: var(--color-white);
  background-color: var(--color-red);
  font-family: 'Londrina Solid', sans-serif;
  border-color: var(--color-red);
  font-size: 16px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  .input-mask {
    border-radius: 7px;
    padding: 1vh 1vw;
    height: 6vh;
    width: 50%;
    margin-top: 1vh;
    color: var(--color-red);
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
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-red);
  width: 70%;
  height: 100vh;
`;

export const Input = styled.input`
  border-radius: 7px;
  padding: 1vh 1vw;
  height: 6vh;
  width: 50%;
  margin-top: 1vh;
  color: var(--color-red);
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
  padding: 1vh 1vw;
  height: 6vh;
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
