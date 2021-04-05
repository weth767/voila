import styled from 'styled-components';

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
