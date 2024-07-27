import React from 'react';
import Image from 'next/image';

const LetterWrapper = ({ content, className }: { content: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Image priority className='absolute left-0 top-0' src="/images/letter_edges_green/letter_top_l.svg" alt="Letter edge" width={60} height={60} />
      <Image priority className='absolute right-0 top-0' src="/images/letter_edges_green/letter_top_r.svg" alt="Letter edge" width={50} height={60} />
      <Image priority className='absolute left-0 bottom-0' src="/images/letter_edges_green/letter_bottom_l.svg" alt="Letter edge" width={162} height={80} />
      <Image priority className='absolute right-0  bottom-[-10px]' src="/images/letter_edges_green/letter_bottom_r.svg" alt="Letter edge" width={159} height={90} />
      <div className='flex justify-center items-center h-[60px] bg-primary ml-[60px] mr-[50px]'>
        <Image priority src="/images/logo_white.svg" alt="BigLogoImage" width={24} height={24} />
      </div>
      <div className='text-white bg-primary'>{content}</div>
      <div className='flex justify-center items-center h-[80px] bg-primary ml-[162px] mr-[159px]'></div>
    </div>
  );
};

export default LetterWrapper;