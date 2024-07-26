import React from 'react';
import Image from 'next/image';

const FormWrapper = ({titleElement, formElement, buttonElement }: { titleElement: string | React.ReactNode, formElement: React.ReactNode, buttonElement: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-1">
      <div className='flex flex-col w-full'>
        <div className='flex justify-center items-center h-11 w-full mb-2'>
          <Image src="/images/logo.svg" alt="BigLogoImage" width={24} height={24} />
        </div>
        <div className='px-5 text-base font-bold'>{titleElement}</div>
        <div className='px-5 border border-line1 border-dashed my-4'></div>
        <div className='px-5 flex-1 flex flex-col w-full'>
          <div className='flex-1'>{formElement}</div>
          <div>{buttonElement}</div>
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;