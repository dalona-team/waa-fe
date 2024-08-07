import React from 'react';
import Image from 'next/image';

const Wrapper = (
  { className, topElement, disableBorder, disableTitle = false, titleElement, formElement, buttonElement, isFloatingButton = false }:
  { className?: string, topElement?: React.ReactNode, disableBorder?: boolean, disableTitle?: boolean, titleElement?: string | React.ReactNode, formElement: React.ReactNode, buttonElement?: React.ReactNode, isFloatingButton?: boolean }) => {
  return (
    <div className={`relative h-full w-full flex flex-1 ${className}`}>
      <div className='flex flex-col w-full'>
        {topElement ? topElement : <div className='flex justify-center items-center h-11 w-full mb-2'>
          <Image src="/images/logo.svg" alt="BigLogoImage" width={24} height={24} />
        </div>}
        {!disableTitle && <div className='px-5 text-base font-bold'>{titleElement}</div>}
        {!disableBorder && <div className='px-5 border border-line1 border-dashed my-4'></div>}
        <div className={`px-5 flex-1 flex flex-col w-full invisible-scroll ${isFloatingButton ? 'pb-14' : ''}`}>
          <div className='flex-1'>{formElement}</div>
        </div>
        {isFloatingButton ? <div className='absolute bottom-3 left-5 h-16 w-[calc(100%-40px)]'>{buttonElement}</div> : buttonElement ? <div className='px-5 pt-5 pb-5'>{buttonElement}</div>: null}
      </div>
    </div>
  );
};

export default Wrapper;