import { styled } from "styled-components";

export const Area = styled.div`
  background-color: ${({ theme }) => theme.colors.Background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModifyBtn = styled.div`
  width: auto;
  padding: 9px 15px;
  background-color: ${({ theme }) => theme.colors.Main};
  font: ${({ theme }) => theme.fonts.Semibold24};
  color: ${({ theme }) => theme.colors.White};
  border-radius: 10px;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  right: 5vw;
  bottom: 3vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White};
  width: 940px;
  height: 800px;
  margin-top: 15vh;
  margin-bottom: 8vh;
  padding: 20px 52px;
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
    margin-left: auto;
    margin-right: auto;
  }
  font: ${({ theme }) => theme.fonts.Medium14};
  background-color: ${({ theme }) => theme.colors.Skyblue};
`;

export const PlanTableContent = styled(PlanTable)`
  background-color: ${({ theme }) => theme.colors.White};
  td {
    border-top: none;
    cursor: pointer;
  }
`;

export const HelpDiscription = styled.div`
  font: ${({ theme }) => theme.fonts.Regular12};
  color: ${({ theme }) => theme.colors.HelpDiscription};
  float: right;
  margin-top: 8px;
`;
