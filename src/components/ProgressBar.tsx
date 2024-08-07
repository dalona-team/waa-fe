import React from 'react';
import Image from 'next/image';

const ProgressBar = ({ percent }: {percent: number}) => {
  return (
    <div className="relative h-8 w-full mx-5 mt-3">
      <div className="w-full bg-line1 rounded my-3 h-[4px]"></div>
      <div className="absolute left-0 top-0 w-full bg-accent rounded my-3 h-[4px]" style={{ transition: 'width 0.3s ease-in-out', width: `${percent}%` }}></div>
      <Image
        className='absolute left-0 top-0'
        src="/images/progress_tip.svg"
        alt="progress_tip"
        width={28}
        height={28}
        style={{ transition: 'left 0.3s ease-in-out',left: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
