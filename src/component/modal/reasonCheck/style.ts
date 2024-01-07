import { styled } from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 350px;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.Background};
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.Semibold28};
  margin-top: 25px;
`;

export const RejectReason = styled.div`
  width: 350px;
  height: 200px;
  background-color: white;
  margin: 20px 80px;
`;

export const CloseBtn = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.Main};
  margin-left: 192px;
  padding: 10px;
  font: ${({ theme }) => theme.fonts.Semibold16};
  color: white;
  cursor: pointer;
`;
