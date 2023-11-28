import { styled } from "styled-components";

export const Container = styled.div`
  margin-left: 5vw;
`;

export const StatusType = styled.div`
  height: 100px;
  width: 1100px;
  background-color: ${({ theme }) => theme.colors.White};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.BottomLine};
  span {
    font: ${({ theme }) => theme.fonts.Medium24};
  }
`;

export const TypeContent = styled.div`
  height: 45px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 20px 20px 0px 0px;
  display: grid;
  grid-template-columns: 100px 1fr repeat(3, 2fr);
  justify-items: center;
  margin-top: 13px;
`;

export const CheckWrapper = styled.div`
  padding: 13px 0 0 40px;
  display: flex;
  gap: 30px;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;
  position: relative;
  /* :hover 상태일 때 가상 요소를 사용하여 "전체 선택" 텍스트 표시 */
  &:hover::before {
    content: "전체선택";
    font: ${({ theme }) => theme.fonts.Regular12};
    position: absolute;
    width: 60px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white; /* 텍스트 색상 설정 */
    background-color: ${({ theme }) => theme.colors.ListContent};
    padding: 6px 8px; /* 텍스트 주변에 간격 추가 */
    border: 1px solid #ccc; /* 테두리 스타일 설정 */
    border-radius: 4px; /* 테두리 둥글기 설정 */
    margin-top: 5px;
  }
`;

export const AcceptBtn = styled.div`
  cursor: pointer;
  position: relative;
  &:hover::before {
    content: "수락";
    font: ${({ theme }) => theme.fonts.Regular16};
    position: absolute;
    width: 50px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white; /* 텍스트 색상 설정 */
    background-color: ${({ theme }) => theme.colors.ListContent};
    padding: 4px 10px; /* 텍스트 주변에 간격 추가 */
    border: 1px solid #ccc; /* 테두리 스타일 설정 */
    border-radius: 4px; /* 테두리 둥글기 설정 */
    margin-top: 5px;
  }
`;

export const RejectBtn = styled(AcceptBtn)`
  &:hover::before {
    content: "거절";
  }
`;

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

export const ListCheckBox = styled.input`
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;
`;
