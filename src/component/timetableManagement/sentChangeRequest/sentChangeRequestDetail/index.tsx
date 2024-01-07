import * as S from './style';
import { ModifyIcon } from '../../../../assets/icons';
import {
  MakeupClassContent,
  MakeupClassType,
  ReplaceClassContent,
  ReplaceClassType,
} from '../../../../constants/timetableManagement';
import { useState } from 'react';
import ReasonCheck from '../../../modal/reasonCheck';

const SentChangeRequestDetail = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const hideModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <S.Area>
      <S.ModifyBtn>
        <img src={ModifyIcon} />
        수정하기
      </S.ModifyBtn>
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
          <div>
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
                <tr>
                  {MakeupClassContent.map((item, index) => {
                    return (
                      <td
                        style={{ width: `${item.size}%` }}
                        key={index}
                        onClick={hideModal}
                      >
                        {item.value}
                        {modalOpen && <ReasonCheck hideModal={hideModal} />}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </S.PlanTableContent>
            <S.HelpDiscription>
              거절된 상태를 누르면 거절 사유를 볼 수 있어요
            </S.HelpDiscription>
          </div>
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
              <tr>
                {ReplaceClassContent.map((item, index) => {
                  return (
                    <td style={{ width: `${item.size}%` }} key={index}>
                      {item.value}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </S.PlanTableContent>
        </S.Wrapper>
      </S.Container>
    </S.Area>
  );
};

export default SentChangeRequestDetail;
