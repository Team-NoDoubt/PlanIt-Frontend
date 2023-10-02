import { styled } from "styled-components";

export const ListDetailWrapper = styled.div`
  height: 120px;
  background-color: ${({ theme }) => theme.colors.ListDetailBackground};
  padding: 15px 40px;
`;

export const ListDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Reason = styled.div`
  font: ${({ theme }) => theme.fonts.Regular20};
`;

export const Response = styled.div`
  display: flex;
  gap: 30px;
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

export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Request = styled.div`
  display: flex;
  gap: 50px;
  font: ${({ theme }) => theme.fonts.Regular28};
  span {
  }
`;

export const Replace = styled.div``;
