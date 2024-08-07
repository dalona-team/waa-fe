import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const SignUp = () => {
  const router = useRouter();

  const handleNaverLogin = () => {
    const state = uuidv4();
    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI ?? '');
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    router.push(naverLoginUrl);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full px-[50px]">
      <div className="flex flex-col items-center">
        <Image
          priority
          src="/images/logo_big.svg"
          alt="BigLogoImage"
          width={90}
          height={74}
        />
        <p className="text-black/80 text-center text-sm pt-1 mt-3">
          떠나간 반려동물에게
          <br />
          편지를 받아보세요!
        </p>
      </div>
      <div className='w-full mt-[60px]'>
        <button type="button" style={{background: '#03C74A'}} className='block w-full h-[48px] flex items-center justify-center' onClick={handleNaverLogin} >
          <Image
            src="/images/icon_naver.svg"
            alt="네이버"
            width={48}
            height={48}
          />
          <span className='text-white'>네이버로 로그인하기</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;

export async function getStaticProps() {
  return {
    props: {
      layoutClassName: 'bg-mint',
    },
  };
}