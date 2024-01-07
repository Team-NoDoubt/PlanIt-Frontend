import { Dispatch, SetStateAction } from 'react';
import {
  WriteIcon,
  TakeChangeRequestIcon,
  SentChangeRequestIcon,
} from '../../../assets/icons';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  selectTab: boolean;
  setSelectTab: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ selectTab, setSelectTab }: PropsType) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.WriteButton
        onClick={() => {
          navigate('/planWritingPage');
        }}
      >
        <img src={WriteIcon} />
        작성하기
      </S.WriteButton>
      <div>
        <S.ChangeRequest
          click={selectTab}
          onClick={() => {
            setSelectTab(true);
          }}
        >
          <img src={TakeChangeRequestIcon} />
          변경 요청 받은 시간표
        </S.ChangeRequest>
        <S.ChangeRequest
          click={!selectTab}
          onClick={() => {
            setSelectTab(false);
          }}
        >
          <img src={SentChangeRequestIcon} />
          변경 요청한 시간표
        </S.ChangeRequest>
      </div>
    </S.Container>
  );
};

export default Sidebar;
