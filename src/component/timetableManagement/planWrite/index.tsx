import * as S from "./style";
import {
  MakeupClassContent,
  MakeupClassType,
  ReplaceClassContent,
  ReplaceClassType,
} from "../../../constants/timetableManagement";
import { useState } from "react";
import { AddList } from "../../../assets/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DownLoadImg from "../../../assets/icons/Download.svg";

const PlanWrite = () => {
  const [replaceClassContents, setReplaceClassContents] = useState([0]);
  const [makeUpClassContents, setMakeUpClassContents] = useState([0]);

  const converToPdf = async () => {
    const date = new Date();

    const canvas = await html2canvas(document.querySelector("#wrting")!);
    const imageFile = canvas.toDataURL("image/png");
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const widthRatio = pageWidth / canvas.width;
    const customHeight = canvas.height * widthRatio;
    doc.addImage(imageFile, "png", 0, 0, pageWidth, customHeight);
    let heightLeft = customHeight;
    let heightAdd = -pageHeight;

    while (heightLeft >= pageHeight) {
      doc.addPage();
      doc.addImage(imageFile, "png", 0, heightAdd, pageWidth, customHeight);
      heightLeft -= pageHeight;
      heightAdd -= pageHeight;
    }
    doc.save(`결 보강 및 수업교체 계획서_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.pdf`);
  };

  return (
    <S.Area>
      <S.RequestButton>요청하기</S.RequestButton>
      <S.DownLoadButton onClick={converToPdf}>
        <img src={DownLoadImg} width={30} />
      </S.DownLoadButton>
      <S.Container id="wrting">
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
                        <td style={{ width: `${item.size}%`, height: 35 }} key={index}>
                          {item.value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </S.PlanTableContent>
          <S.AddListIconLayout onClick={() => setMakeUpClassContents((prev) => [...prev, 0])}>
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
                        <td style={{ width: `${item.size}%`, height: 35 }} key={index}>
                          {item.value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </S.PlanTableContent>
          <S.AddListIconLayout onClick={() => setReplaceClassContents((prev) => [...prev, 0])}>
            <img src={AddList} />
          </S.AddListIconLayout>
        </S.Wrapper>
      </S.Container>
    </S.Area>
  );
};

export default PlanWrite;
