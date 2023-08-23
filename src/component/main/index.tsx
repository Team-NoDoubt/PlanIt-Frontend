import ChangeClass from "./classChange";
import TimeTable from "./timeTable";
import * as S from "./style";
import { ChangeEvent, useState } from "react";
import { getTimetableList } from "../../utils/apis/timetable";
import { Class, Grade } from "../../constants/main";

const Main = () => {
  const [gradeOption, setGradeOption] = useState("1");
  const [classOption, setClassOption] = useState("1");
  const { data, refetch } = getTimetableList(
    Number(gradeOption),
    Number(classOption)
  );

  const onGradeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGradeOption(e.currentTarget.value);
    refetch();
  };

  const onClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setClassOption(e.currentTarget.value);
    refetch();
  };

  return (
    <S.Container>
      <div>
        <S.ClassWrapper>
          <S.Class onChange={onGradeChange} value={gradeOption}>
            {Grade.map((item, index) => {
              return (
                <option key={index} value={item.key}>
                  {item.value}
                </option>
              );
            })}
          </S.Class>
          <S.Class onChange={onClassChange} value={classOption}>
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
      <ChangeClass />
    </S.Container>
  );
};

export default Main;
