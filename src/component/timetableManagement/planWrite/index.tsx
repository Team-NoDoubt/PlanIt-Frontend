import * as S from "./style";
import {
  WirteMakeupClass,
  WirteReplaceClass,
  PeriodDropdown,
  GradeClassDropdown,
} from "../../../constants/timetableManagement";
import { ChangeEvent, useState } from "react";
import { AddList } from "../../../assets/icons";
import { useCookies } from "react-cookie";
import { subjectInquiry, postPlanWrite } from "../../../utils/apis/timetables";
import { teacherListInquiry } from "../../../utils/apis/teachers";
import { PlanWriteType } from "../../../utils/apis/timetables/type";

const PlanWrite = () => {
  /** 작성자 이름 추가 */
  const [cookies] = useCookies();
  const name = cookies.name;

  /** 리스트 추가 해주는 부분 */
  const [replaceClassContents, setReplaceClassContents] = useState([0]);
  const [makeUpClassContents, setMakeUpClassContents] = useState([0]);

  /** 결보강 과목 자동선택 */
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
  /** 결보강 날짜(요일) onchange */
  const daySelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMakeUpSubjectAuto({
      ...makeUpSubjectAuto,
      [e.target.name]: e.target.value,
    });
  };
  /** 교시,학년-반 드롭다운 onChange  */
  const onDropdownChange = (
    e: ChangeEvent<HTMLSelectElement>,
    staeUpdater: React.Dispatch<
      React.SetStateAction<{ date: string; period: string; gradeClass: string }>
    >
  ) => {
    staeUpdater((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /** 수업교체 과목 자동선택 */
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
  /** 수업교체 날짜(요일) */
  const requestDaySelectChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  /* 담당교사(서명) 드롭다운 */
  const { data: teacherListInquiryData } = teacherListInquiry();
  const useTeacherList = () => {
    const [teacherList, setTeacherList] = useState<string>(
      teacherListInquiryData?.teacher_id_list[0].teacher_id.toString()!
    );

    const handleTeacherListChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setTeacherList(e.target.value);
    };

    return { teacherList, handleTeacherListChange };
  };

  const {
    teacherList: makeUpTeacherList,
    handleTeacherListChange: handleMakeUpTeacherListChange,
  } = useTeacherList();
  const {
    teacherList: replaceTeacherList,
    handleTeacherListChange: handleReplaceTeacherListChange,
  } = useTeacherList();

  /* 사유 & input 입력부분  */
  const [reasonState, setReasonState] = useState("");
  const [planState, setPlanState] = useState("");
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    stateUpdater: React.Dispatch<React.SetStateAction<string>>
  ) => {
    stateUpdater(e.target.value);
  };

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

  /* 요청 보내는 함수 */
  const requestForm = () => {
    setPlanWrite({
      reason: reasonState,
      reinforcement_list: [
        {
          reinforcement_class_id: data?.timetable_id!,
          reinforcement_plan: planState,
          reinforcement_teacher_id: makeUpTeacherList,
        },
      ],
      replacement_list: [
        {
          request_timetable_id: requestSubject?.timetable_id!,
          change_timetable_id: changeSubject?.timetable_id!,
          replacement_teacher_id: replaceTeacherList,
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange(e, setReasonState)
                  }
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
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          onDropdownChange(e, setMakeUpSubjectAuto)
                        }
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
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          onDropdownChange(e, setMakeUpSubjectAuto)
                        }
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
                      <input
                        value={planState}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          onInputChange(e, setPlanState)
                        }
                      />
                    </td>
                    <td style={{ width: "15%", height: 35 }}>
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
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          onDropdownChange(e, setRequestSubjectAuto)
                        }
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
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          onDropdownChange(e, setRequestSubjectAuto)
                        }
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
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          onDropdownChange(e, setChangeSubjectAuto)
                        }
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
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          onDropdownChange(e, setChangeSubjectAuto)
                        }
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
