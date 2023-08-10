import * as S from "./style";
import { PlanitLogo } from "../../assets/logo";
import { Alram } from "../../assets/icons";

const Header = () => {
  return (
    <S.HeaderArea>
      <img src={PlanitLogo} />
      <S.PageWrapper>
        <S.Page>시간표 관리</S.Page>
        <S.Page>수행평가 관리</S.Page>
        <img src={Alram}></img>
        <S.Page>씨발철우</S.Page>
      </S.PageWrapper>
    </S.HeaderArea>
  );
};

export default Header;
