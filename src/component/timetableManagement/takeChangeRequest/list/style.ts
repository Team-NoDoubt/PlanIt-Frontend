import { styled } from 'styled-components';

export const TakeRequestListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  min-height: 470px;
  border-radius: 20px;
`;

export const TakeRequestList = styled.div<{ check?: boolean }>`
  width: 1100px;
  height: 60px;
  background-color: ${({ theme, check }) =>
    check ? theme.colors.ListCheck : theme.colors.White};
  border-bottom: 1px solid ${({ theme }) => theme.colors.BottomLine};
  display: grid;
  grid-template-columns: 100px 1fr repeat(3, 2fr);
  justify-items: center;
  align-items: center;
  cursor: pointer;
  span {
    font: ${({ theme }) => theme.fonts.Regular24};
  }
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;
`;
