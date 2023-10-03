import * as S from "./style";

interface PropsType {
  hideModal: () => void;
}

const ReasonCheck = ({ hideModal }: PropsType) => {
  return (
    <S.Container>
      <S.Title>거절 사유</S.Title>
      <S.RejectReason>수업 째고 싶어용</S.RejectReason>
      <S.CloseBtn onClick={hideModal}>닫기</S.CloseBtn>
    </S.Container>
  );
};
export default ReasonCheck;
