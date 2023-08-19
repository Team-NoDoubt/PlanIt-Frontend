import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 190px;
  margin-top: 10vh;
  @media screen and (max-width: 1450px) {
    flex-direction: column;
    margin-top: 50px;
    gap: 80px;
    padding-bottom: 60px;
  }
`;

export const ClassWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0 10px 450px;
`;

export const Class = styled.select`
  width: 80px;
  height: 40px;
  border-radius: 15px;
  font: ${({ theme }) => theme.fonts.Medium16};
  border: 0.1px solid ${({ theme }) => theme.colors.White};
  background-color: ${({ theme }) => theme.colors.White};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
