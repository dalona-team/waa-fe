import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Service() {
  const router = useRouter();
  const { hideModal } = useModal();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isDimVisible, setIsDimVisible] = useState(true);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');



  useEffect(() => {
    const drawer = drawerRef.current;
    if (drawer) {
      drawer.style.transform = 'translateX(100%)';
      setTimeout(() => {
        drawer.style.transition = 'transform 0.3s ease-out';
        drawer.style.transform = 'translateX(0)';
      }, 0);
    }
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    if(userName){
      setUserName(userName);
    }
    if(userEmail){
      setUserEmail(userEmail);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    router.push('/');
  };

  const handleClose = () => {
    setIsDimVisible(false); // dim 요소를 바로 숨김
    const drawer = drawerRef.current;
    if (drawer) {
      drawer.style.transform = 'translateX(100%)';
      setTimeout(() => {
        setIsVisible(false);
        hideModal();
      }, 300); // 애니메이션 시간과 일치시킴
    }
  };

  if (!isVisible) return null;

  return (
    <div className='relative h-full w-full flex flex-1 justify-end'>
      {isDimVisible && (
        <div onClick={handleClose} className='absolute top-0 left-0 h-full w-full flex flex-1 opacity-80 bg-black/95'></div>
      )}
      <div ref={drawerRef} className='bg-white px-5 py-3.5 w-[286px] max-w-[100%] h-full z-10'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-end h-[44px]'>
            <button type='button' className='relative left-[10px]' onClick={handleClose}>
              <Image
                src="/images/icon_close_b.svg"
                alt="닫기"
                width={24}
                height={24}
              />
            </button>
          </div>
          {userName ? <div className='flex gap-2 items-center'>
            <Image
              src="/images/icon_naver.svg"
              alt="네이버"
              width={24}
              height={24}
            />
            <span className='text-lg text-black/80 font-bold'>{userName}<span className='text-black/50 text-xs ml-2'>{userEmail}</span></span>
          </div> : <div className='flex gap-2 items-center' onClick={() => { router.push('/login'); hideModal(); }}>
            <div className='w-[34px] h-[34px] bg-accent rounded-full flex justify-center items-center'>
              <Image
                src="/images/logo_white.svg"
                alt="핑크 로고"
                width={24}
                height={24}
              />
            </div>
            <span className='text-lg text-black/80 font-bold'>로그인해 주세요</span>
          </div>}
          <div className="pt-6 pb-4">
            <div className="bg-black/10 h-[1px]" />
          </div>
          <div className="h-[52px] flex items-center cursor-pointer" onClick={() => { router.push('/'); hideModal(); }}>
            <span className='text-black/80 text-lg'>젤리레터 홈</span>
          </div>
          <div className="h-[52px] flex items-center cursor-pointer">
            <span className='text-black/80 text-lg' onClick={() => { router.push('/my-letter'); hideModal(); }}>MY 레터 보기</span>
          </div>
          <div className="pt-6 pb-4">
            <div className="bg-black/10 h-[1px]" />
          </div>
          <div className="h-[52px] flex items-center cursor-pointer" onClick={() => window.open('https://tame-griffin-5f8.notion.site/cc864a2ce9e3425d9410ec0723dafe7d?pvs=25', '_blank')}>
            <span className='text-black/80 text-lg'>서비스 소개</span>
          </div>
          <div className="h-[52px] flex items-center">
            <span className='text-black/80 text-lg opacity-50'>고객 센터</span>
          </div>
          <div className="pt-6 pb-4">
            <div className="bg-black/10 h-[1px]" />
          </div>
          {userName ? <div className="h-[52px] flex items-center cursor-pointer">
            <span className='text-black/80 text-lg' onClick={() => handleLogout()}>로그아웃</span>
          </div> : null}
        </div>
      </div>
    </div>
  );
}