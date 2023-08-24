import * as S from "./style";
import { PlanitLogo } from "../../assets/logo";
import { LoginLeft, LoginRight } from "../../assets/icons";

const Login = () => {
  return (
    <S.LoginArea>
      <S.IconLeft src={LoginLeft} />
      <S.IconRight src={LoginRight} />
      <S.Logo src={PlanitLogo} />
      <S.Input placeholder="ID" />
      <S.Input placeholder="Password" />
      <S.LoginBtn>Login</S.LoginBtn>
    </S.LoginArea>
  );
};
export default Login;
