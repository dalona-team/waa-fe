import React from 'react';
import Image from 'next/image';

const LetterWrapper = ({ content, className, isReply = false }: { content: React.ReactNode, className?: string, isReply?: boolean }) => {
  return (
    !isReply ? (
      <div className={`relative w-full ${className ?? ''} bg-primary rounded-[63px]`}>
        <div className="flex justify-center items-center h-[60px]">
          <Image
            priority
            src="/images/letter_edges_green/letter_top_l.svg"
            alt="Letter edge"
            width={60}
            height={60}
          />
          <div className="bg-primary flex-1 h-full flex justify-center items-center">
            <Image
              priority
              src="/images/logo_white.svg"
              alt="BigLogoImage"
              width={24}
              height={24}
            />
          </div>
          <Image
            priority
            src="/images/letter_edges_green/letter_top_r.svg"
            alt="Letter edge"
            width={50}
            height={60}
          />
        </div>
        <div className="text-white bg-primary">{content}</div>
        <div className="flex justify-center items-center h-[60px]">
          <Image
            priority
            src="/images/letter_edges_green/letter_bottom_l.svg"
            alt="Letter edge"
            width={60}
            height={60}
          />
          <div className="bg-primary flex-1 h-full flex justify-center items-center"></div>
          <Image
            priority
            src="/images/letter_edges_green/letter_bottom_r.svg"
            alt="Letter edge"
            width={60}
            height={60}
          />
        </div>
      </div>
    ) : (
      <div className={`relative w-full ${className ?? ''} bg-accent rounded-[63px]`}>
        <div className="flex justify-center items-center h-[60px]">
          <Image
            priority
            src="/images/letter_edges_pink/letter_top_l.svg"
            alt="Letter edge"
            width={60}
            height={60}
          />
          <div className="bg-accent flex-1 h-full flex justify-center items-center">
            <Image
              priority
              src="/images/logo_white.svg"
              alt="BigLogoImage"
              width={24}
              height={24}
            />
          </div>
          <Image
            priority
            src="/images/letter_edges_pink/letter_top_r.svg"
            alt="Letter edge"
            width={50}
            height={60}
          />
        </div>
        <div className="text-white bg-accent">{content}</div>
        <div className="flex justify-center items-center h-[60px]">
          <Image
            priority
            src="/images/letter_edges_pink/letter_bottom_l.svg"
            alt="Letter edge"
            width={60}
            height={60}
          />
          <div className="bg-accent flex-1 h-full flex justify-center items-center"></div>
          <Image
            priority
            src="/images/letter_edges_pink/letter_bottom_r.svg"
            alt="Letter edge"
            width={60}
            height={60}
          />
        </div>
      </div>
    )
  );
};

export default LetterWrapper;