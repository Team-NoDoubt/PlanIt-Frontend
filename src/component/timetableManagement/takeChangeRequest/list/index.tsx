import * as S from "./style";
import ListDetail from "../listDetail";
import { replaceClassList } from "../../../../utils/apis/changeMaster/type";
import { useState } from "react";
const List = ({ status, teacher_name, request_date }: replaceClassList) => {
  const [listCheck, setListCheck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const onCheckBoxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const target = e.currentTarget;
    target.checked ? setListCheck(true) : setListCheck(false);
  };
  return (
    <div onClick={toggleAccordion}>
      <S.ListCheckBox type="checkBox" onClick={onCheckBoxClick} />
      <span>{status}</span>
      <span>{teacher_name}</span>
      <span></span>
      <span>{request_date}</span>
      {isOpen && <ListDetail />}
    </div>
  );
};

export default List;
