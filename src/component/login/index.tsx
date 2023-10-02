import * as S from "./style";
import { PlanitLogo } from "../../assets/logo";
import { LoginLeft, LoginRight } from "../../assets/icons";
import { useState, ChangeEvent } from "react";
import { postLogin } from "../../utils/apis/login";

const Login = () => {
  const [loginOption, setLoginOption] = useState({
    idOption: "",
    passwordOption: "",
  });
  const { idOption, passwordOption } = loginOption;
  const { mutate: onclickLoginBtn } = postLogin({
    account_id: idOption,
    password: passwordOption,
  });

  const onloginOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginOption({
      ...loginOption,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.LoginArea>
      <S.IconLeft src={LoginLeft} />
      <S.IconRight src={LoginRight} />
      <S.Logo src={PlanitLogo} />
      <S.Input
        placeholder="ID"
        name="idOption"
        onChange={onloginOptionChange}
      />
      <S.Input
        placeholder="Password"
        name="passwordOption"
        onChange={onloginOptionChange}
        type="password"
      />
      <S.LoginBtn
        disabled={idOption === "" || passwordOption === ""}
        onClick={() => onclickLoginBtn()}
      >
        Login
      </S.LoginBtn>
    </S.LoginArea>
  );
};
export default Login;
