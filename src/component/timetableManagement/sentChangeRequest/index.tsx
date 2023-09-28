import { SentRequestType } from "../../../constants/timetableManagement";
import * as S from "./style";
import { useNavigate } from "react-router";

const SentChangeRequest = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <S.SentRequestStatus>
          {SentRequestType.map((item, index) => {
            return <span key={index}>{item.value}</span>;
          })}
        </S.SentRequestStatus>
        <S.SentRequestListWrapper>
          <S.SentRequestList
            onClick={() => {
              navigate("/sentChangeRequestDetail");
            }}
          >
            <span>요청중</span>
            <span>시간표 요청</span>
            <span>12월 31일</span>
          </S.SentRequestList>
        </S.SentRequestListWrapper>
      </S.Container>
    </>
  );
};

export default SentChangeRequest;
