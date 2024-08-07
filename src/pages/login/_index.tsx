import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

export default function Terms() {
  const router = useRouter();

  const handleNaverLogin = () => {
    const state = uuidv4();
    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI ?? '');
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    router.push(naverLoginUrl);
  };

  return (
    <div>
      <button type="button" onClick={handleNaverLogin}>네이버로 로그인하기</button>
    </div>
  );
}