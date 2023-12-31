import { styled } from 'styled-components';

export const Area = styled.div`
  background-color: ${({ theme }) => theme.colors.Background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White};
  width: 940px;
  min-height: 800px;
  margin-top: 15vh;
  margin-bottom: 8vh;
  padding: 52px 26px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  hr {
    width: 100%;
    color: ${({ theme }) => theme.colors.TableLine};
    margin-top: 5px;
  }
`;

export const Header = styled.div`
  span {
    font: ${({ theme }) => theme.fonts.Semibold24};
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const HeaderText = styled.div`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
`;

export const Teacher = styled.div`
  font: ${({ theme }) => theme.fonts.Regular16};
  color: ${({ theme }) => theme.colors.ListContent};
  margin-left: auto;
`;

export const Reason = styled.div`
  font: ${({ theme }) => theme.fonts.Regular16};
  color: ${({ theme }) => theme.colors.ListContent};
  margin-top: 10px;
`;

export const ReasonInput = styled.input`
  width: 700px;
`;

export const PlanText = styled.div`
  font: ${({ theme }) => theme.fonts.Medium20};
  display: flex;
  justify-content: center;
  margin: 80px 0 20px 0;
`;

export const PlanTable = styled.table`
  width: 900px;
  height: 35px;
  border-collapse: collapse;
  text-align: center;
  td {
    font: ${({ theme }) => theme.fonts.Medium14};
    border: 0.1px solid ${({ theme }) => theme.colors.Black};
  }
  font: ${({ theme }) => theme.fonts.Medium14};
  background-color: ${({ theme }) => theme.colors.Skyblue};
`;

export const PlanTableContent = styled(PlanTable)`
  background-color: ${({ theme }) => theme.colors.White};
  td {
    cursor: pointer;
  }
  input {
    text-align: center;
  }
`;

export const TableInput = styled.input`
  font: ${({ theme }) => theme.fonts.Regular16};
  text-align: center;
`;

export const AddListIconLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  width: 45px;
  height: 20px;
  background-color: #d9d9d9;
  margin: 0 auto;
  cursor: pointer;
`;

export const RequestButton = styled.button`
  position: fixed;
  right: 5vw;
  bottom: 3vh;
  width: auto;
  border: 0;
  outline: 0;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 10px;
  font: ${({ theme }) => theme.fonts.Semibold24};
  color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
`;

export const DownLoadButton = styled.button`
  position: fixed;
  left: 5vw;
  bottom: 3vh;
  width: auto;
  border: 0;
  outline: 0;
  width: 50px;
  height: 50px;
  /* padding: 8px 8px; */
  background-color: ${({ theme }) => theme.colors.Black};
  border-radius: 50px;
  font: ${({ theme }) => theme.fonts.Semibold24};
  color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
`;
