import * as S from './style';
import { PlanitLogo } from '../../assets/logo';
import { Alram } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderArea>
      <img
        src={PlanitLogo}
        onClick={() => {
          navigate('/main');
        }}
      />
      <S.PageWrapper>
        <S.Page
          onClick={() => {
            navigate('/timetableManagement');
          }}
        >
          시간표 관리
        </S.Page>
        <S.Page>수행평가 관리</S.Page>
        <img src={Alram} />
        <S.Page>프로필</S.Page>
      </S.PageWrapper>
    </S.HeaderArea>
  );
};

export default Header;
