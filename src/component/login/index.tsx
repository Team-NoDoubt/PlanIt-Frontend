import * as S from "./style";
import { PlanitLogo } from "../../assets/logo";
import { LoginLeft, LoginRight } from "../../assets/icons";

const Login = () => {
<<<<<<< Updated upstream
=======
  const [loginOption, setLoginOption] = useState({
    id: "",
    password: "",
  });
  const { id, password } = loginOption;
  const { mutate: onclickLoginBtn } = postLogin({
    account_id: id,
    password: password,
  });

  const onloginOptionChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setLoginOption({
      ...loginOption,
      [name]: value,
    });
  };

>>>>>>> Stashed changes
  return (
    <S.LoginArea>
      <S.IconLeft src={LoginLeft} />
      <S.IconRight src={LoginRight} />
      <S.Logo src={PlanitLogo} />
<<<<<<< Updated upstream
      <S.Input placeholder="ID" />
      <S.Input placeholder="Password" />
      <S.LoginBtn>Login</S.LoginBtn>
=======
      <S.Input placeholder="ID" name="id" onChange={onloginOptionChange} />
      <S.Input
        placeholder="Password"
        name="password"
        onChange={onloginOptionChange}
        type="password"
      />
      <S.LoginBtn
        disabled={id === "" || password === ""}
        onClick={() => onclickLoginBtn()}
      >
        Login
      </S.LoginBtn>
>>>>>>> Stashed changes
    </S.LoginArea>
  );
};
export default Login;
