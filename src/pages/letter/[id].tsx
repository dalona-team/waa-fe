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

function replaceNewlinesWithBr(inputText: string) {
  return inputText.replace(/(?:\r\\n|\r|\n)/g, '<br /> ');
}

type Props = {
  petId: string;
  petName: string;
  letterContent: string;
  imageUrl: string;
  counselingContent: string;
  addedMessage: string;
};


export default function Letter({petId, petName, letterContent, counselingContent, imageUrl, addedMessage}: Props) {
  const router = useRouter();
  const {setToastMessage} = useToastMessage();
  const { resetFormData } = useForm();
  const { showModal } = useModal();
  const [isLogin, setIsLogin] = useState(false);

  const copy = useCallback(() => {
    const link = window.location.href; // 현재 페이지의 URL을 가져옵니다.
    navigator.clipboard.writeText(link).then(() => {
      setToastMessage({ show: true, body: '링크가 복사 되었습니다.', className: '!bottom-[30px]' });
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.error('Failed to copy: ', err);
    });
  }, [setToastMessage]);

  const handleMenuClick = () => {
    showModal(<Drawer />);
  };

  const handleLogin = () => {
    localStorage.setItem('redirectUrl', `/reply?petId=${petId}&petName=${petName}`);
    router.push('/login');
  };

  useEffect(() => {
    const hasToken = Cookies.get('accessToken');
    setIsLogin(hasToken ? true : false);
    resetFormData();
  },[resetFormData]);

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
              src="/images/icon_home.svg"
              alt="BigLogoImage"
              width={24}
              height={24}
              onClick={() => router.push('/')}
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
          <div>
            <LetterWrapper
              content={
                <div className="px-[26px] flex flex-col gap-3">
                  <div
                    className="font-gangwon text-2xl leading-[40px]"
                    dangerouslySetInnerHTML={{ __html: letterContent }}
                  ></div>
                  {imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="w-full rounded-lg"
                      src={imageUrl}
                      alt="Letter edge"
                      width={388}
                      height={388}
                    />
                  ) : null}
                  <div
                    className="font-gangwon text-2xl leading-[40px]"
                    dangerouslySetInnerHTML={{ __html: addedMessage }}
                  ></div>
                </div>
              }
            />
            <div className="my-5 flex gap-2 justify-center items-center">
              <button
                className="w-[147px] h-12 text-white bg-accent rounded-[20px] flex justify-center items-center gap-1.5"
                onClick={copy}
              >
                <Image
                  src="/images/icon_copy.svg"
                  alt="복사하기"
                  width={24}
                  height={24}
                />
                <span className="font-bold">공유하기</span>
              </button>
              <button
                className="w-[147px] h-12 text-white bg-accent rounded-[20px] flex justify-center items-center gap-1.5"
                onClick={() => isLogin ? router.push(`/reply?petId=${petId}&petName=${petName}`) : handleLogin()}
              >
                <Image
                  src="/images/icon_pen.svg"
                  alt="답장하기"
                  width={24}
                  height={24}
                />
                <span className="font-bold">답장하기</span>
              </button>
            </div>
            <CounselingWrapper
              content={
                <div
                  className="px-[26px] leading-[36px]"
                  dangerouslySetInnerHTML={{ __html: counselingContent }}
                ></div>
              }
            />
          </div>
        }
      />
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as ParsedUrlQuery;
  const res = await fetch(`https://www.jellyletter.site:8080/api/letter?shareKey=${id}`);
  const data = await res.json();

  const counselingRes = await fetch(`https://www.jellyletter.site:8080/api/counseling?petId=${data.petResDto.id}`);
  const counselingData = await counselingRes.json();

  const imageUrl = data.petAiImage.imageUrl;
  const addedMessage = `${data.petAiImage.message} <img class="inline-block" src="/images/icon_ jelly.svg" alt="강아지 발바닥" />`;

  const content = data.content.toString();
  const outputText = content.replace(/\n/g,'<img class="inline-block jelly" src="/images/icon_ jelly.svg" alt="강아지 발바닥" /><br /> ');

  const counselingContent = counselingData.content;
  const counselingOutput = replaceNewlinesWithBr(counselingContent);

  const petId = String(data.petResDto.id);
  const petName = data.petResDto.name;

  return {
    props: {
      layoutClassName: 'bg-mint',
      letterContent: `${outputText} <img class="inline-block" src="/images/icon_ jelly.svg" alt="강아지 발바닥" />`,
      counselingContent: counselingOutput,
      imageUrl,
      addedMessage,
      petId,
      petName
    },
  };
};