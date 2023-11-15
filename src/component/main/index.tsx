import ClassChange from "./classChange";
import TimeTable from "./timeTable";
import * as S from "./style";
import { ChangeEvent, useState } from "react";
import {
  getChangeDetailsList,
  getTimetableList,
} from "../../utils/apis/timetables";
import { Class, Grade } from "../../constants/main";

const Main = () => {
  const [selectOption, setSelectOption] = useState({
    gradeOption: "1",
    classOption: "1",
  });

  const { gradeOption, classOption } = selectOption;

  const { data, refetch } = getTimetableList(
    Number(gradeOption),
    Number(classOption)
  );

  const { data: changeClass } = getChangeDetailsList(
    Number(gradeOption),
    Number(classOption)
  );

  const onselectOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setSelectOption({
      ...selectOption,
      [name]: value,
    });
    refetch();
  };

  return (
    <S.Container>
      <div>
        <S.ClassWrapper>
          <S.Class
            name="gradeOption"
            onChange={onselectOptionChange}
            value={gradeOption}
          >
            {Grade.map((item, index) => {
              return (
                <option key={index} value={item.key}>
                  {item.value}
                </option>
              );
            })}
          </S.Class>
          <S.Class
            name="classOption"
            onChange={onselectOptionChange}
            value={classOption}
          >
            {Class.map((item, index) => {
              return (
                <option key={index} value={item.key}>
                  {item.value}
                </option>
              );
            })}
          </S.Class>
        </S.ClassWrapper>
        <TimeTable data={data!} />
      </div>
      <ClassChange data={changeClass!} />
    </S.Container>
  );
};

export default Main;
