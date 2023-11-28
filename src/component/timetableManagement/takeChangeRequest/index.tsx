import * as S from "./style";
import { TypeContent } from "../../../constants/timetableManagement";
import { AcceptBtn, RejectBtn } from "../../../assets/icons";
import { useState } from "react";
import { getReplacementClassList } from "../../../utils/apis/changeMaster";
import List from "./list";

const TakeChangeRequest = () => {
  // const [checked, setChecked] = useState<string[]>([]);
  // const checkedHandler = (id: string, isChecked: boolean) => {
  //   if (isChecked) {
  //     setChecked((prev) => [...prev, id]); // 불변성을 지키기 위한 원본 배열을 복사 후 추가
  //   } else {
  //     setChecked(checked.filter((item) => item !== id));
  //     // 현재 checkItems의 배열에서 해당 id를 제외한 새로운 배열 반환
  //   }
  //   const allcheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.checked) {
  //       setChecked(checkList.map((item) => item.id));
  //     } else {
  //       setChecked([]);
  //     }
  //     console.log(`allcheck = `, e.target.checked);
  //   };
  const [checked, setChecked] = useState(false);
  const { data } = getReplacementClassList("");
  return (
    <S.Container>
      <S.StatusType>
        <S.CheckWrapper>
          <S.CheckBox
            type="checkBox"
            // onChange={allcheckedHandler}
            // checked={checked.length === TypeContent.length}
          />
          <S.AcceptBtn>
            <img src={AcceptBtn} />
          </S.AcceptBtn>
          <S.RejectBtn>
            <img src={RejectBtn} />
          </S.RejectBtn>
        </S.CheckWrapper>
        <S.TypeContent>
          <div></div>
          {TypeContent.map((item, index) => {
            return <span key={index}>{item.value}</span>;
          })}
        </S.TypeContent>
      </S.StatusType>
      <S.TakeRequestListWrapper>
        <S.TakeRequestList check={checked}>
          {data?.replacement_class_list.map((item, index) => {
            return <List {...item} key={index} />;
          })}
        </S.TakeRequestList>
      </S.TakeRequestListWrapper>
    </S.Container>
  );
};
export default TakeChangeRequest;
