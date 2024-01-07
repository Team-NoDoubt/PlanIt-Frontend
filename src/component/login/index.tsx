import * as S from './style';
import { PlanitLogo } from '../../assets/logo';
import { LoginLeft, LoginRight } from '../../assets/icons';
import { useState, ChangeEvent } from 'react';
import { postLogin } from '../../utils/apis/login';

const Login = () => {
  const [loginOption, setLoginOption] = useState({
    id: '',
    password: '',
  });
  const { id, password } = loginOption;
  const { mutate: onClickLoginBtn } = postLogin({
    account_id: id,
    password: password,
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
      <S.Input placeholder="ID" name="id" onChange={onloginOptionChange} />
      <S.Input
        placeholder="Password"
        name="password"
        onChange={onloginOptionChange}
        type="password"
      />
      <S.LoginBtn disabled={!id || !password} onClick={onClickLoginBtn}>
        Login
      </S.LoginBtn>
    </S.LoginArea>
  );
};
export default Login;
