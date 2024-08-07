import React from 'react';
import Image from 'next/image';

const FormWrapper = ({
  formElement,
  buttonElement,
}: {
  formElement: React.ReactNode;
  buttonElement: React.ReactNode;
}) => {
  return (
    <div className="relative h-full w-full flex flex-1">
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center h-11 w-full mb-2">
          <Image
            src="/images/logo.svg"
            alt="BigLogoImage"
            width={24}
            height={24}
          />
        </div>
        <div
          className="px-5 flex-1 flex flex-col w-full invisible-scroll"
        >
          <div className="flex-1">{formElement}</div>
        </div>
        <div className="px-5 pt-5 pb-5">{buttonElement}</div>
      </div>
    </div>
  );
};

export default FormWrapper;