import React from 'react';
import Image from 'next/image';

const HomeDay = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image src="/images/logo_big_white.svg" alt="BigLogoImage" width={90} height={74} />
      <p className='text-white text-center text-xs'>떠나간 반려동물에게<br />편지를 받아보세요!</p>
    </div>
  );
};

export default HomeDay;