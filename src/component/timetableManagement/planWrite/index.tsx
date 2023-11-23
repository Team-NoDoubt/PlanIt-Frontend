import * as S from "./style";
import {
  WirteMakeupClass,
  WirteReplaceClass,
  PeriodDropdown,
  GradeClassDropdown,
} from "../../../constants/timetableManagement";
import { useState } from "react";
import { AddList } from "../../../assets/icons";
import { useCookies } from "react-cookie";
import { subjectInquiry, postPlanWrite } from "../../../utils/apis/timetables";
import { teacherListInquiry } from "../../../utils/apis/teachers";
import { PlanWriteType } from "../../../utils/apis/timetables/type";
import { useInput } from "../../../hooks/useInput";

const PlanWrite = () => {
  const [cookies] = useCookies();
  const name = cookies.name;

  const [replaceClassContents, setReplaceClassContents] = useState([0]);
  const [makeUpClassContents, setMakeUpClassContents] = useState([0]);

  const today = new Date();
  const subjectAuto = () => ({
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`,
    period: "1",
    gradeClass: "1-1",
  });
  const { form: makeUpSubjectAuto, onChange: setMakeUpSubjectAuto } = useInput(
    subjectAuto()
  );
  const { data } = subjectInquiry(
    makeUpSubjectAuto.date,
    makeUpSubjectAuto.period,
    makeUpSubjectAuto.gradeClass
  );
  const { form: requestSubjectAuto, onChange: setRequestSubjectAuto } =
    useInput(subjectAuto());
  const { data: requestSubject } = subjectInquiry(
    requestSubjectAuto.date,
    requestSubjectAuto.period,
    requestSubjectAuto.gradeClass
  );
  const { form: changeSubjectAuto, onChange: setChangeSubjectAuto } = useInput(
    subjectAuto()
  );
  const { data: changeSubject } = subjectInquiry(
    changeSubjectAuto.date,
    changeSubjectAuto.period,
    changeSubjectAuto.gradeClass
  );

  const { data: teacherListInquiryData } = teacherListInquiry();
  const { form: makeUpTeacherList, onChange: handleMakeUpTeacherListChange } =
    useInput(teacherListInquiryData?.teacher_id_list[0]?.teacher_id.toString());
  const { form: replaceTeacherList, onChange: handleReplaceTeacherListChange } =
    useInput(teacherListInquiryData?.teacher_id_list[0]?.teacher_id.toString());

  const { form: reasonState, onChange: setReasonState } = useInput("");
  const { form: planState, onChange: setPlanState } = useInput("");

  const [planWrite, setPlanWrite] = useState<PlanWriteType>({
    reason: "",
    reinforcement_list: [],
    replacement_list: [],
  });
  const { reason, reinforcement_list, replacement_list } = planWrite;
  const { mutate: onClickWriteBtn } = postPlanWrite({
    reason: reason,
    reinforcement_list: reinforcement_list,
    replacement_list: replacement_list,
  });

  const requestForm = () => {
    setPlanWrite({
      reason: reasonState,
      reinforcement_list: [
        {
          reinforcement_class_id: data?.timetable_id!,
          reinforcement_plan: planState,
          reinforcement_teacher_id: makeUpTeacherList!,
        },
      ],
      replacement_list: [
        {
          request_timetable_id: requestSubject?.timetable_id!,
          change_timetable_id: changeSubject?.timetable_id!,
          replacement_teacher_id: replaceTeacherList!,
        },
      ],
    });
    setTimeout(onClickWriteBtn);
  };

  return (
    <S.Area>
      <S.RequestButton onClick={requestForm}>요청하기</S.RequestButton>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <span>결 보강 및 수업교체 계획서</span>
            <S.HeaderText>
              <S.Teacher>요청교사: {name}</S.Teacher>
              <S.Reason>
                사유:{" "}
                <S.ReasonInput
                  placeholder="사유를 입력해 주세요"
                  value={reasonState}
                  onChange={setReasonState}
                />
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
                    <td style={{ width: "13%" }}>
                      <input
                        type="Date"
                        name="date"
                        onChange={setMakeUpSubjectAuto}
                        value={makeUpSubjectAuto.date}
                      />
                    </td>
                    <td style={{ width: "6%" }}>
                      <select
                        name="period"
                        onChange={setMakeUpSubjectAuto}
                        value={makeUpSubjectAuto.period}
                      >
                        {PeriodDropdown.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "10%" }}>
                      <select
                        name="gradeClass"
                        onChange={setMakeUpSubjectAuto}
                        value={makeUpSubjectAuto.gradeClass}
                      >
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "32%" }}>
                      <div>{data?.subject}</div>
                    </td>
                    <td style={{ width: "20%" }}>
                      <input value={planState} onChange={setPlanState} />
                    </td>
                    <td style={{ width: "15%" }}>
                      <select
                        onChange={handleMakeUpTeacherListChange}
                        value={makeUpTeacherList}
                      >
                        {teacherListInquiryData?.teacher_id_list?.map(
                          (item) => {
                            return (
                              <option value={item.teacher_id}>
                                {item.teacher_name}
                              </option>
                            );
                          }
                        )}
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
                    <td style={{ width: "14%" }}>
                      <input
                        type="Date"
                        name="date"
                        onChange={setRequestSubjectAuto}
                        value={requestSubjectAuto.date}
                      />
                    </td>
                    <td style={{ width: "5%" }}>
                      <select
                        name="period"
                        onChange={setRequestSubjectAuto}
                        value={requestSubjectAuto.period}
                      >
                        {PeriodDropdown.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "6%" }}>
                      <select
                        name="gradeClass"
                        onChange={setRequestSubjectAuto}
                        value={requestSubjectAuto.gradeClass}
                      >
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "16%" }}>
                      <div style={{ width: "100%" }}>
                        {requestSubject?.subject}
                      </div>
                    </td>
                    <td style={{ width: "4%" }}>↔️</td>
                    <td style={{ width: "14%" }}>
                      <input
                        type="Date"
                        name="date"
                        onChange={setChangeSubjectAuto}
                        value={changeSubjectAuto.date}
                      />
                    </td>
                    <td style={{ width: "5%" }}>
                      <select
                        name="period"
                        onChange={setChangeSubjectAuto}
                        value={changeSubjectAuto.period}
                      >
                        {PeriodDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "6%" }}>
                      <select
                        name="gradeClass"
                        onChange={setChangeSubjectAuto}
                        value={changeSubjectAuto.gradeClass}
                      >
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "16%" }}>
                      <div>{changeSubject?.subject}</div>
                    </td>
                    <td style={{ width: "10%" }}>
                      <select
                        onChange={handleReplaceTeacherListChange}
                        value={replaceTeacherList}
                      >
                        {teacherListInquiryData?.teacher_id_list?.map(
                          (item) => {
                            return (
                              <option value={item.teacher_id}>
                                {item.teacher_name}
                              </option>
                            );
                          }
                        )}
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
