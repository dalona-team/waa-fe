import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';


export default function NaverCallback({ code, state }: { code: string; state: string }) {
  const router = useRouter();

  useEffect(() => {
    if (code && state) {
      // 네이버 OAuth2 토큰 요청
      fetch(`/api/naver/token?code=${code}&state=${state}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          console.log(code);
          // 유저 정보를 우리 서비스로 전달하여 로그인 처리
          return fetch('/api/jellyletter/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: data.access_token }),
          });
        })
        .then(response => response.json())
        .then(data => {
          // 토큰을 받아서 로컬 스토리지에 저장하거나, 홈으로 리다이렉트
          if(data.loginInfo){
            Cookies.set('accessToken', data.loginInfo.accessToken, { expires: 7 });
            Cookies.set('refreshToken', data.loginInfo.refreshToken, { expires: 7 });
            localStorage.setItem('userId', data.loginInfo.user.id);
            localStorage.setItem('userName', data.loginInfo.user.username);
            localStorage.setItem('userEmail', data.loginInfo.user.email);
          }
          const redirectUrl = localStorage.getItem('redirectUrl');
          if(redirectUrl){
            router.push(redirectUrl);
            localStorage.removeItem('redirectUrl');
          }else{
            router.push('/');
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error('Fetch error:', error);
          router.push('/');
        });
    }
  }, [code, state, router]);

  return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code, state } = context.query;

  return {
    props: {
      code: code || null,
      state: state || null,
    },
  };
};
