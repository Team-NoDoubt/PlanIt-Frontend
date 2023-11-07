import * as S from "./style";
import {
  WirteMakeupClass,
  WirteReplaceClass,
  PeriodDropdown,
  GradeClassDropdown,
  TeacherDropdown,
} from "../../../constants/timetableManagement";
import { ChangeEvent, useState } from "react";
import { AddList } from "../../../assets/icons";
import { useCookies } from "react-cookie";
import { subjectInquiry } from "../../../utils/apis/timetable";
import { teacherListInquiry } from "../../../utils/apis/teachers";

const PlanWrite = () => {
  const [cookies] = useCookies();
  const name = cookies.name;

  const [replaceClassContents, setReplaceClassContents] = useState([0]);
  const [makeUpClassContents, setMakeUpClassContents] = useState([0]);

  const today = new Date();
  const [makeUpSubjectAuto, setMakeUpSubjectAuto] = useState({
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`,
    period: "1",
    gradeClass: "1-1",
  });
  const { data } = subjectInquiry(
    makeUpSubjectAuto.date,
    makeUpSubjectAuto.period,
    makeUpSubjectAuto.gradeClass
  );
  const daySelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMakeUpSubjectAuto({
      ...makeUpSubjectAuto,
      [e.target.name]: e.target.value,
    });
  };
  const dropBoxChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setMakeUpSubjectAuto({
      ...makeUpSubjectAuto,
      [e.target.name]: e.target.value,
    });
  };

  const [requestSubjectAuto, setRequestSubjectAuto] = useState({
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`,
    period: "1",
    gradeClass: "1-1",
  });
  const { data: requestSubject } = subjectInquiry(
    requestSubjectAuto.date,
    requestSubjectAuto.period,
    requestSubjectAuto.gradeClass
  );
  const requestDaySelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRequestSubjectAuto({
      ...requestSubjectAuto,
      [e.target.name]: e.target.value,
    });
  };
  const requestDropBoxChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRequestSubjectAuto({
      ...requestSubjectAuto,
      [e.target.name]: e.target.value,
    });
  };

  const [changeSubjectAuto, setChangeSubjectAuto] = useState({
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`,
    period: "1",
    gradeClass: "1-1",
  });
  const { data: changeSubject } = subjectInquiry(
    changeSubjectAuto.date,
    changeSubjectAuto.period,
    changeSubjectAuto.gradeClass
  );
  const changeDaySelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChangeSubjectAuto({
      ...changeSubjectAuto,
      [e.target.name]: e.target.value,
    });
  };
  const changeDropBoxChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setChangeSubjectAuto({
      ...changeSubjectAuto,
      [e.target.name]: e.target.value,
    });
  };

  const { data: makeUpTeachers } = teacherListInquiry();
  const [makeUpTeacherList, setMakeUpTeacherList] = useState<string>(
    makeUpTeachers?.teacher_id_list[0].teacher_id.toString()!
  );
  const makeUpTeachersChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMakeUpTeacherList(e.target.value);
  };
  const { data: replaceTeachers } = teacherListInquiry();
  const [replaceTeacherList, setReplaceTeacherList] = useState<string>(
    replaceTeachers?.teacher_id_list[0].teacher_id.toString()!
  );
  const replaceTeachersChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setReplaceTeacherList(e.target.value);
  };

  return (
    <S.Area>
      <S.RequestButton>요청하기</S.RequestButton>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <span>결 보강 및 수업교체 계획서</span>
            <S.HeaderText>
              <S.Teacher>요청교사: {name}</S.Teacher>
              <S.Reason>
                사유: <S.ReasonInput placeholder="사유를 입력해 주세요" />
              </S.Reason>
              <hr />
            </S.HeaderText>
          </S.Header>
          <S.PlanText>결 보강 계획서</S.PlanText>
          <S.PlanTable name="dte">
            <tbody>
              <tr>
                {WirteMakeupClass.map((item, index) => {
                  return (
                    <td style={{ width: `${item.size}%` }} key={index}>
                      {item.value}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </S.PlanTable>
          <S.PlanTableContent>
            <tbody>
              {makeUpClassContents.map((_, index) => {
                return (
                  <tr key={index}>
                    <td style={{ width: "13%", height: 35 }}>
                      <input
                        type="Date"
                        name="date"
                        onChange={daySelectChange}
                        value={makeUpSubjectAuto.date}
                      />
                    </td>
                    <td style={{ width: "6%", height: 35 }}>
                      <select
                        name="period"
                        onChange={dropBoxChange}
                        value={makeUpSubjectAuto.period}
                      >
                        {PeriodDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "10%", height: 35 }}>
                      <select
                        name="gradeClass"
                        onChange={dropBoxChange}
                        value={makeUpSubjectAuto.gradeClass}
                      >
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "32%", height: 35 }}>
                      <div>{data?.subject}</div>
                    </td>
                    <td style={{ width: "20%", height: 35 }}>
                      <input />
                    </td>
                    <td style={{ width: "15%", height: 35 }}>
                      <select
                        onChange={makeUpTeachersChange}
                        value={makeUpTeacherList}
                      >
                        {makeUpTeachers?.teacher_id_list?.map((item) => {
                          return (
                            <option value={item.teacher_id}>
                              {item.teacher_name}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </S.PlanTableContent>
          <S.AddListIconLayout
            onClick={() => setMakeUpClassContents((prev) => [...prev, 0])}
          >
            <img src={AddList} />
          </S.AddListIconLayout>
          <S.PlanText>수업교체 계획서</S.PlanText>
          <S.PlanTable>
            <tbody>
              <tr>
                {WirteReplaceClass.map((item, index) => {
                  return (
                    <td style={{ width: `${item.size}%` }} key={index}>
                      {item.value}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </S.PlanTable>
          <S.PlanTableContent>
            <tbody>
              {replaceClassContents.map((_, index) => {
                return (
                  <tr key={index}>
                    <td style={{ width: "14%", height: 35 }}>
                      <input
                        type="Date"
                        name="date"
                        onChange={requestDaySelectChange}
                        value={requestSubjectAuto.date}
                      />
                    </td>
                    <td style={{ width: "5%", height: 35 }}>
                      <select
                        name="period"
                        onChange={requestDropBoxChange}
                        value={requestSubjectAuto.period}
                      >
                        {PeriodDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "6%", height: 35 }}>
                      <select
                        name="gradeClass"
                        onChange={requestDropBoxChange}
                        value={requestSubjectAuto.gradeClass}
                      >
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "16%", height: 35 }}>
                      <div style={{ width: "100%" }}>
                        {requestSubject?.subject}
                      </div>
                    </td>
                    <td style={{ width: "4%", height: 35 }}>↔️</td>
                    <td style={{ width: "14%", height: 35 }}>
                      <input
                        type="Date"
                        name="date"
                        onChange={changeDaySelectChange}
                        value={changeSubjectAuto.date}
                      />
                    </td>
                    <td style={{ width: "5%", height: 35 }}>
                      <select
                        name="period"
                        onChange={changeDropBoxChange}
                        value={changeSubjectAuto.period}
                      >
                        {PeriodDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "6%", height: 35 }}>
                      <select
                        name="gradeClass"
                        onChange={changeDropBoxChange}
                        value={changeSubjectAuto.gradeClass}
                      >
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "16%", height: 35 }}>
                      <div>{changeSubject?.subject}</div>
                    </td>
                    <td style={{ width: "10%", height: 35 }}>
                      <select
                        onChange={replaceTeachersChange}
                        value={replaceTeacherList}
                      >
                        {replaceTeachers?.teacher_id_list?.map((item) => {
                          return (
                            <option value={item.teacher_id}>
                              {item.teacher_name}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </S.PlanTableContent>
          <S.AddListIconLayout
            onClick={() => setReplaceClassContents((prev) => [...prev, 0])}
          >
            <img src={AddList} />
          </S.AddListIconLayout>
        </S.Wrapper>
      </S.Container>
    </S.Area>
  );
};

export default PlanWrite;
