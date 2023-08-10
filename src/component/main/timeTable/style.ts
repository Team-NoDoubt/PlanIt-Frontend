import { styled } from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
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

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 580px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  table {
    border-collapse: collapse;
  }
  tr {
    float: left;
  }
  th,
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 108.3px;
    height: 75px;
    text-align: center;
    font: ${({ theme }) => theme.fonts.Regular24};
  }
  td {
    border-right: 1px solid ${({ theme }) => theme.colors.TableLine};
  }
  p {
    font: ${({ theme }) => theme.fonts.regular12};
  }
`;

export const Day = styled.div`
  width: 650px;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.Main};
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  border-radius: 20px 20px 0px 0px;
  padding-left: 106px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font: ${({ theme }) => theme.fonts.Regular24};
    color: ${({ theme }) => theme.colors.White};
  }
`;
