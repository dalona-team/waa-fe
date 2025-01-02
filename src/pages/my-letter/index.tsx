/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect } from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { useModal } from '@/hooks/useModal';
import Drawer from '@/components/drawer/Drawer';
import moment from 'moment';
import { useMyLetter } from '@/hooks/useMyLetter';

export interface Letter {
  shareKey: string;
  content: string;
  typeCode: number;
  createAt: string;
  petAiImage: {
    id: number;
    imageUrl: string;
    message: string;
    species: 'DOG' | 'CAT';
  };
}

export default function MyLetter() {
  const router = useRouter();
  const { showModal } = useModal();
  const { data: myLetters, isLoading, isError } = useMyLetter();

  useEffect(() => {
    if (isError) {
      // 에러 발생 시 홈으로 리다이렉트
      router.push('/');
    }
  }, [isError, router]);

  const handleMenuClick = useCallback(() => {
    showModal(<Drawer />);
  },[showModal]);

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
              src="/images/icon_menu_b.svg"
              alt="HamburgerMenu"
              width={24}
              height={24}
              onClick={handleMenuClick}
            />
          </div>
        }
        formElement={
          myLetters && myLetters.length > 0 ? (
            <>
              <div className="flex flex-col gap-3 mt-3">
                {myLetters.map((letter, index) => (
                  <div
                    key={letter.shareKey}
                    className="h-[138px] overflow-hidden rounded-lg flex cursor-pointer"
                    onClick={() =>
                      letter.typeCode === 0
                        ? router.push(`/letter/${letter.shareKey}`)
                        : router.push(`/letter/${letter.shareKey}?isReply=true`)
                    }
                  >
                    <div
                      className={`w-[10px] ${
                        letter.typeCode === 0 ? 'bg-primary' : 'bg-accent'
                      }`}
                    ></div>
                    <div className="flex flex-col gap-2 p-5 bg-white flex-1">
                      <div className="flex justify-between align-center">
                        <span className="text-black/80 text-lg font-bold">
                          {myLetters.length - index}st{' '}
                          {letter.typeCode === 0 ? '받은' : '보낸'} 편지
                        </span>
                        <span className="text-black/40 text-sm mt-1">
                          {moment(letter.createAt).format('YYYY.MM.DD')}
                        </span>
                      </div>
                      <div className='flex justify-between gap-2.5'>
                        <span className="text-black/40 text-sm text-ellipsis overflow-hidden line-clamp-3 flex-1">
                          {letter.content.replace(/\n/g, ' ')}
                        </span>
                        {letter.petAiImage.imageUrl ? <div className='w-[60px] h-[60px]'>
                          <img src={letter.petAiImage.imageUrl} width={60} height={60} alt={letter.petAiImage.species} />
                        </div> : null }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-black/40 text-sm mt-6">
                내새꾸와의 편지는 10회만 이용할 수 있습니다.편지 이용 횟수를
                제한하는 이유는 보호자님이 편지를 통해 미완의 감정을 해결하고,
                상실감으로부터 벗어날 수 있도록 도움을 드리고자 하는 이유입니다.
              </div>
            </>
          ) : (
            isLoading ? null : <div className="h-full flex flex-col items-center justify-center">
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
                onClick={() => router.push('/form/step1')}
              >
                <span className="font-bold">내새꾸에게 편지신청</span>
              </button>
            </div>
          )
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