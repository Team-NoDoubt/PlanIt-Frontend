import { useMutation } from '@tanstack/react-query';
import { instance } from '../index';
import { AxiosError } from 'axios';
import { LoginType } from './type';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = '/user';

export const postLogin = (data: LoginType) => {
  const navigator = useNavigate();
  const [, setCookies] = useCookies();
  return useMutation(async () => instance.post(`${router}/auth`, data), {
    onSuccess: (res) => {
      const accessExpired = new Date(res.data.access_token_exp);
      setCookies('refresh_token', res.data.refresh_token);
      setCookies('access_token', res.data.access_token, {
        expires: accessExpired,
      });
      navigator('/main');
    },
    onError: (err: AxiosError<AxiosError>) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
            toast.error('비밀번호를 다시 확인해주세요.');
            break;
          case 404:
            toast.error('아이디와 비밀번호를 다시 확인해주세요.');
            break;
          case 500:
            toast.error('아이디와 비밀번호를 다시 확인해주세요.');
            break;
        }
      } else {
        toast.error('아이디와 비밀번호를 다시 확인해주세요.');
      }
    },
  });
};
