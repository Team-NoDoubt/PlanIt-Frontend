import { styled } from "styled-components";

export const Container = styled.div`
  margin-left: 5vw;
`;

export const SentRequestStatus = styled.div`
  height: 100px;
  width: 1100px;
  background-color: ${({ theme }) => theme.colors.White};
  border-bottom: 3px solid ${({ theme }) => theme.colors.BottomLine};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding-top: 50px;
  span {
    font: ${({ theme }) => theme.fonts.Medium24};
  }
`;

export const SentRequestListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  min-height: 470px;
  border-radius: 20px;
`;

export const SentRequestList = styled.div`
  width: 1100px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.White};
  border-bottom: 1px solid ${({ theme }) => theme.colors.BottomLine};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  cursor: pointer;
  span {
    font: ${({ theme }) => theme.fonts.Regular24};
  }
`;

export const Div = styled.div``;
