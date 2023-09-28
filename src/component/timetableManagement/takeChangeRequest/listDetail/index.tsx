import * as S from "./style";
import { ChangeIcon, AcceptBtn, RejectBtn } from "../../../../assets/icons";
const ListDetail = () => {
  return (
    <S.ListDetailWrapper>
      <S.ListDetailTop>
        <S.Reason>사유: 출장</S.Reason>
        <S.Response>
          <S.AcceptBtn>
            <img src={AcceptBtn} />
          </S.AcceptBtn>
          <S.RejectBtn>
            <img src={RejectBtn} />
          </S.RejectBtn>
        </S.Response>
      </S.ListDetailTop>
      <S.ListContent>
        <S.Request>
          <span>9.12(화)</span>
          <span>7교시</span>
          <span>2-4</span>
          <span>컴네</span>
        </S.Request>
        <img src={ChangeIcon} />
        <S.Request>
          <span>9.13(수)</span>
          <span>5교시</span>
          <span>2-4</span>
          <span>한국사</span>
        </S.Request>
      </S.ListContent>
    </S.ListDetailWrapper>
  );
};

export default ListDetail;
