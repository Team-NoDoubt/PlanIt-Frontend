import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  margin-left: 1vw;
  div {
    width: 210px;
  }
`;

export const WriteButton = styled.button<{ color?: string }>`
  display: flex;
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.Skyblue};
  font: ${({ theme }) => theme.fonts.Medium20};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 15px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ChangeRequest = styled.div<{ click?: boolean }>`
  width: 210px;
  height: 32px;
  display: flex;
  justify-content: start;
  padding: 6px 0 0 20px;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme, click }) => click && theme.colors.Main};
  font: ${({ theme, click }) => click && theme.fonts.Light10};
  color: ${({ theme, click }) => click && theme.colors.White};
  font: ${({ theme }) => theme.fonts.Light10};
  border: none;
  cursor: pointer;
  border-radius: 0 15px;
  img {
    width: 24px;
    height: 24px;
  }
`;
