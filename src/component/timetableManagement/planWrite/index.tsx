import * as S from "./style";
import {
  WirteMakeupClass,
  WirteReplaceClass,
  PeriodDropdown,
  GradeClassDropdown,
  TeacherDropdown,
} from "../../../constants/timetableManagement";
import { postPlanWrite } from "../../../utils/apis/timetable";
import { ChangeEvent, useState } from "react";
import { AddList } from "../../../assets/icons";
import { useCookies } from "react-cookie";

const PlanWrite = () => {
  const [cookies] = useCookies();
  const name = cookies.name;
  const [replaceClassContents, setReplaceClassContents] = useState([0]);
  const [makeUpClassContents, setMakeUpClassContents] = useState([0]);
  const [planWrite, setPlanWrite] = useState({
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
  const planWriteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlanWrite({
      ...planWrite,
      [e.target.name]: e.target.value,
    });
    console.log(planWrite);
  };

  return (
    <S.Area>
      <S.RequestButton onclick={onClickWriteBtn}>요청하기</S.RequestButton>
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
                  name={"reason"}
                  onChange={planWriteChange}
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
                      <input type="Date" />
                    </td>
                    <td style={{ width: "6%", height: 35 }}>
                      <select>
                        {PeriodDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "10%", height: 35 }}>
                      <select>
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "32%", height: 35 }}>
                      <input />
                    </td>
                    <td style={{ width: "20%", height: 35 }}>
                      <input />
                    </td>
                    <td style={{ width: "15%", height: 35 }}>
                      <select>
                        {TeacherDropdown?.map((item) => {
                          return <option>{item}</option>;
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
          <S.PlanTableContent
            name={"replacement_list"}
            onChange={planWriteChange}
          >
            <tbody>
              {replaceClassContents.map((_, index) => {
                return (
                  <tr key={index}>
                    <td style={{ width: "14%", height: 35 }}>
                      <input type="Date" />
                    </td>
                    <td style={{ width: "5%", height: 35 }}>
                      <select>
                        {PeriodDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "6%", height: 35 }}>
                      <select>
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "16%", height: 35 }}>
                      <input style={{ width: "100%" }} />
                    </td>
                    <td style={{ width: "4%", height: 35 }}>↔️</td>
                    <td style={{ width: "14%", height: 35 }}>
                      <input type="Date" />
                    </td>
                    <td style={{ width: "5%", height: 35 }}>
                      <select>
                        {PeriodDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "6%", height: 35 }}>
                      <select>
                        {GradeClassDropdown?.map((item) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                    </td>
                    <td style={{ width: "16%", height: 35 }}>
                      <input style={{ width: "100%" }} />
                    </td>
                    <td style={{ width: "10%", height: 35 }}>
                      <select>
                        {TeacherDropdown?.map((item) => {
                          return <option>{item}</option>;
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
