import { styled } from "styled-components";

export const LoginArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const Logo = styled.img`
  width: 245px;
  height: 50px;
`;

export const IconLeft = styled.img`
  float: left;
  position: absolute;
  left: 0;
  height: 450px;
  margin-top: 14vh;
`;

export const IconRight = styled.img`
  float: right;
  position: absolute;
  right: 0;
  margin-bottom: 20vh;
  height: 450px;
`;

export const Input = styled.input`
  float: left;
  width: 440px;
  height: 60px;
  border: none;
  outline: none;
  padding-left: 15px;
  font: ${({ theme }) => theme.fonts.Regular16};
  border-bottom: 3px solid ${({ theme }) => theme.colors.LoginInput};
`;

export const LoginBtn = styled.button`
  width: 180px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.Main};
  font: ${({ theme }) => theme.fonts.Regular20};
  color: ${({ theme }) => theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #dfdfde;
    cursor: default;
  }
`;
