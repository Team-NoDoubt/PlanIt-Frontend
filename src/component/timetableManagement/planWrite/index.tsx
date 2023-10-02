import * as S from "./style";
import {
  MakeupClassContent,
  MakeupClassType,
  ReplaceClassContent,
  ReplaceClassType,
} from "../../../constants/timetableManagement";
import { useState } from "react";
import { AddList } from "../../../assets/icons";

const PlanWrite = () => {
  const [replaceClassContents, setReplaceClassContents] = useState([0]);
  const [makeUpClassContents, setMakeUpClassContents] = useState([0]);

  return (
    <S.Area>
      <S.RequestButton>요청하기</S.RequestButton>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <span>결 보강 및 수업교체 계획서</span>
            <S.HeaderText>
              <S.Teacher>요청교사: 김설우</S.Teacher>
              <S.Reason>사유: 출장</S.Reason>
              <hr />
            </S.HeaderText>
          </S.Header>
          <S.PlanText>결 보강 계획서</S.PlanText>
          <S.PlanTable>
            <tbody>
              <tr>
                {MakeupClassType.map((item, index) => {
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
              {makeUpClassContents.map(() => {
                return (
                  <tr>
                    {MakeupClassContent.map((item, index) => {
                      return (
                        <td
                          style={{ width: `${item.size}%`, height: 35 }}
                          key={index}
                        >
                          {item.value}
                        </td>
                      );
                    })}
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
                {ReplaceClassType.map((item, index) => {
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
              {replaceClassContents.map(() => {
                return (
                  <tr>
                    {ReplaceClassContent.map((item, index) => {
                      return (
                        <td
                          style={{ width: `${item.size}%`, height: 35 }}
                          key={index}
                        >
                          {item.value}
                        </td>
                      );
                    })}
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
