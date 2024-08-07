import React, { useCallback, useEffect, useState } from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useToastMessage } from '@/hooks/useToastMessage';
import Image from 'next/image';
import LetterWrapper from '@/components/letter/LetterWrapper';
import { GetServerSideProps } from 'next';
import CounselingWrapper from '@/components/counseling/CounselingWrapper';
import { ParsedUrlQuery } from 'querystring';
import { useForm } from '@/hooks/useForm';
import Head from 'next/head';
import { useModal } from '@/hooks/useModal';
import Drawer from '@/components/drawer/Drawer';
import Cookies from 'js-cookie';


export default function MyLetter() {
  const router = useRouter();
  const {setToastMessage} = useToastMessage();
  const { resetFormData } = useForm();
  const { showModal } = useModal();
  const [isLogin, setIsLogin] = useState(false);

  const handleMenuClick = () => {
    showModal(<Drawer />);
  };

  return (
    <>
      <Head>
        <title>젤리레터 🐾💌 - 편지보기</title>
      </Head>
      <Wrapper
        disableTitle
        disableBorder
        topElement={
          <div className="flex items-center justify-between h-11 w-full mb-2">
            <Image
              className="cursor-pointer mx-5"
              src="/images/icon_back.svg"
              alt="BigLogoImage"
              width={24}
              height={24}
              onClick={() => router.back()}
            />
            <Image
              className="cursor-pointer mx-5"
              src="/images/icon_menu.svg"
              alt="HamburgerMenu"
              width={24}
              height={24}
              onClick={handleMenuClick}
            />
          </div>
        }
        formElement={
          // <div>
          //   <LetterWrapper
          //     content={
          //       <div className="px-[26px] flex flex-col gap-3">
          //         <div
          //           className="font-gangwon text-2xl leading-[40px]"
          //           dangerouslySetInnerHTML={{ __html: letterContent }}
          //         ></div>
          //         {imageUrl ? (
          //           // eslint-disable-next-line @next/next/no-img-element
          //           <img
          //             className="w-full rounded-lg"
          //             src={imageUrl}
          //             alt="Letter edge"
          //             width={388}
          //             height={388}
          //           />
          //         ) : null}
          //         <div
          //           className="font-gangwon text-2xl leading-[40px]"
          //           dangerouslySetInnerHTML={{ __html: addedMessage }}
          //         ></div>
          //       </div>
          //     }
          //   />
          //   <div className="my-5 flex gap-2 justify-center items-center">
          //     <button
          //       className="w-[147px] h-12 text-white bg-accent rounded-[20px] flex justify-center items-center gap-1.5"
          //       onClick={copy}
          //     >
          //       <Image
          //         src="/images/icon_copy.svg"
          //         alt="복사하기"
          //         width={24}
          //         height={24}
          //       />
          //       <span className="font-bold">공유하기</span>
          //     </button>
          //     <button
          //       className="w-[147px] h-12 text-white bg-accent rounded-[20px] flex justify-center items-center gap-1.5"
          //       onClick={() => isLogin ? router.push(`/reply?petId=${petId}&petName=${petName}`) : handleLogin()}
          //     >
          //       <Image
          //         src="/images/icon_pen.svg"
          //         alt="답장하기"
          //         width={24}
          //         height={24}
          //       />
          //       <span className="font-bold">답장하기</span>
          //     </button>
          //   </div>
          //   <CounselingWrapper
          //     content={
          //       <div
          //         className="px-[26px] leading-[36px]"
          //         dangerouslySetInnerHTML={{ __html: counselingContent }}
          //       ></div>
          //     }
          //   />
          // </div>
          <div className="h-full flex flex-col items-center justify-center">
            <Image
              priority
              src="/images/logo_big.svg"
              alt="BigLogoImage"
              width={90}
              height={74}
            />
            <p className="text-black/80 text-center text-sm pt-1 mt-3 mb-6">
              받은 레터가 없습니다.
              <br />
              내새꾸에게 레터를 신청해보세요!
            </p>
            <button
              className="w-[192px] h-12 text-white bg-primary rounded-[20px] flex justify-center items-center gap-1.5"
            >
              <span className="font-bold">내새꾸에게 편지신청</span>
            </button>
          </div>
        }
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layoutClassName: 'bg-mint',
    },
  };
}