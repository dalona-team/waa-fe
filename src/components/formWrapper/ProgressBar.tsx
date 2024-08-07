import React from 'react';
import Image from 'next/image';

const FormWrapper = ({step}: {step: number}) => {
  return (
    <div className="relative h-8 w-full">
      <div className="w-full bg-line1 rounded my-3"></div>
      <Image
        className='absolute left-0 top-0'
        src="/images/progress_tip.svg"
        alt="progress_tip"
        width={28}
        height={28}
      />
    </div>
  );
};

export default FormWrapper;
