import { useState } from 'react';
import ListDetail from '../listDetail';
import * as S from './style';

const List = () => {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const onCheckBoxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation(); // 체크박스 클릭 시 이벤트 전파 중지
    const target = e.currentTarget;
    target.checked ? setChecked(true) : setChecked(false);
  };

  return (
    <S.TakeRequestListWrapper>
      <S.TakeRequestList check={checked} onClick={toggleAccordion}>
        <S.CheckBox type="checkBox" onClick={onCheckBoxClick} />
        <span>요청중</span>
        <span>김철우</span>
        <span>수업교체 요청</span>
        <span>9월 11일</span>
      </S.TakeRequestList>
      {isOpen && (
        <>
          <ListDetail />
        </>
      )}
    </S.TakeRequestListWrapper>
  );
};

export default List;
