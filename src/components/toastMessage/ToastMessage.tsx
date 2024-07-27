import React, { useCallback, useEffect, useState } from 'react';
import 'swiper/css';
import { useToastMessage } from '@/hooks/useToastMessage';

const ToastMessage = () => {
  const { toastMessage, setToastMessage } = useToastMessage();
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = useCallback(() => {
    setFadeOut(true);
    setTimeout(() => {
      setToastMessage({ body: '', show: false });
      setFadeOut(false);
    }, 1000); // fade out 애니메이션 시간과 일치시킵니다.
  }, [setToastMessage]);

  useEffect(() => {
    if (toastMessage.show) {
      const timer = setTimeout(() => {
        handleClose();
      }, 1000); // 1초 후에 메시지를 사라지게 합니다.

      return () => clearTimeout(timer);
    }
  }, [toastMessage, handleClose]);

  if(!toastMessage.show) return null;

  return (
    <div className={`z-[9999] absolute w-full bottom-[90px] flex justify-center items-center ${fadeOut ? 'fade-out' : ''} ${toastMessage.className}`}>
      <span className='inline-block px-[30px] h-[48px] rounded-[20px] bg-[#000000f0] text-white text-center leading-[48px]'>
        {toastMessage.body}
      </span>
    </div>
  );
};

export default ToastMessage;