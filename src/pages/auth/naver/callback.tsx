import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NaverCallback() {
  const router = useRouter();

  useEffect(() => {
    const { code, state } = router.query;

    if (code) {
      // 네이버 OAuth2 토큰 요청
      fetch('/api/naver/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, state }),
      })
        .then(response => response.json())
        .then(data => {
          // 토큰을 받아서 사용자 정보를 가져오는 로직
          fetch('/api/naver/userinfo', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${data.access_token}`,
            },
          })
            .then(response => response.json())
            .then(userInfo => {
              // 사용자 정보를 처리하는 로직
              console.log(userInfo);
              // 예: 사용자 정보를 저장하고 홈으로 리다이렉트
              router.push('/');
            });
        });
    }
  }, [router]);

  return <div>로그인 중...</div>;
}