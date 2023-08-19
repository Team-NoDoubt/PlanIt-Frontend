import ChangeClass from "./classChange";
import TimeTable from "./timeTable";
import * as S from "./style";
import { useEffect, useState } from "react";
import { getTimetableList } from "../../utils/apis/timetable";
import { Class, Grade } from "../../constants/main";

const Main = () => {
  const [gradeOption, setGradeOption] = useState(1);
  const [classOption, setClassOption] = useState(1);

  const onGradeChange = (e: any) => {
    setGradeOption(e.currentTarget.value);
  };

  const onClassChange = (e: any) => {
    setClassOption(e.currentTarget.value);
  };

  const { data, isLoading } = getTimetableList(gradeOption, classOption);

  useEffect(() => {
    console.log(1);
  }, [gradeOption, classOption]);

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
        <TimeTable data={data} />
      </div>
      <ChangeClass />
    </S.Container>
  );
};

export default Main;
