import { styled } from "styled-components";

export const Table = styled.table`
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 20px 20px;
  border-collapse: collapse;
  width: 648px;
  tr {
    display: block;
    float: left;
  }
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 108px;
    height: 70px;
    font: ${({ theme }) => theme.fonts.Regular24};
    border-right: 1px solid ${({ theme }) => theme.colors.TableLine};
    border-left: 1px solid ${({ theme }) => theme.colors.TableLine};
  }
  p {
    font: ${({ theme }) => theme.fonts.regular12};
  }
`;

export const Day = styled.div`
  height: 70px;
  background-color: ${({ theme }) => theme.colors.Main};
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
