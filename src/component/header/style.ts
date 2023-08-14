import { styled } from "styled-components";

export const HeaderArea = styled.div`
  font: ${({ theme }) => theme.fonts.Medium20};
  background-color: ${({ theme }) => theme.colors.White};
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 190px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  p,
  img,
  button {
    cursor: pointer;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  width: 510px;
  align-items: center;
`;

export const Page = styled.div`
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1.5px;
    background-color: ${({ theme }) => theme.colors.Main};
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
  }
  &:hover:after,
  &.active:after {
    transform: scaleX(1);
  }
`;
