import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.Background};
  padding-top: 15vh;
  height: 100vh;
  display: flex;
`;
