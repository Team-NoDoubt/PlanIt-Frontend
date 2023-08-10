import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font: ${({ theme }) => theme.fonts.Medium24};
  }
`;

export const ClassChangeBox = styled.div`
  width: 420px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.TableLine};
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 7px;
`;

export const Schedule = styled.div`
  font: ${({ theme }) => theme.fonts.Regular16};
`;

export const Subject = styled.div`
  font: ${({ theme }) => theme.fonts.Medium20};
`;

export const Teacher = styled.div`
  font: ${({ theme }) => theme.fonts.Regular16};
`;
