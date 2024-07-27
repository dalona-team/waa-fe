import React from 'react';
import Image from 'next/image';

const CounselingWrapper = ({ content, className }: { content: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative w-full ${className} mb-8`}>
      <Image priority className='absolute left-0 top-0' src="/images/letter_edges_yellow/letter_top_l.svg" alt="Letter edge" width={60} height={60} />
      <Image priority className='absolute right-0 top-0' src="/images/letter_edges_yellow/letter_top_r.svg" alt="Letter edge" width={60} height={60} />
      <Image priority className='absolute left-0 bottom-[-10px]' src="/images/letter_edges_yellow/letter_bottom_l.svg" alt="Letter edge" width={159} height={90} />
      <Image priority className='absolute right-0 bottom-0' src="/images/letter_edges_yellow/letter_bottom_r.svg" alt="Letter edge" width={162} height={80} />
      <div className='flex justify-center items-center h-[60px] bg-yellow ml-[60px] mr-[50px] pt-5'>
        <span className='text-gray-950 font-bold'>COUNSELING</span>
      </div>
      <div className='text-gray-950 bg-yellow z-10 relative text-base pt-2'>{content}</div>
      <div className='flex justify-center items-center h-[80px] bg-yellow ml-[159px] mr-[162px]'></div>
    </div>
  );
};

export default CounselingWrapper;