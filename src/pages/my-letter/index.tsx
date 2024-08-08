import React, { useEffect, useState } from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useToastMessage } from '@/hooks/useToastMessage';
import Image from 'next/image';
import LetterWrapper from '@/components/letter/LetterWrapper';
import CounselingWrapper from '@/components/counseling/CounselingWrapper';
import { useForm } from '@/hooks/useForm';
import Head from 'next/head';
import { useModal } from '@/hooks/useModal';
import Drawer from '@/components/drawer/Drawer';
import Cookies from 'js-cookie';

interface Letter {
  shareKey: string;
  content: string;
  typeCode: number;
}

const convertNewlinesToBreaks = (text: string) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export default function MyLetter() {
  const router = useRouter();
  const { setToastMessage } = useToastMessage();
  const { resetFormData } = useForm();
  const { showModal } = useModal();
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState<Letter[]>([]);
  const [error, setError] = useState(null);

  const handleMenuClick = () => {
    showModal(<Drawer />);
  };

  const fetchData = async () => {
    const accessToken = Cookies.get('accessToken');
    try {
      const res = await fetch('https://www.jellyletter.site:8080/api/letter/user-pet', {
        headers: {
          // 'Authorization': accessToken ?? ''
          'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMCIsInVzZXJSb2xlIjoiVVNFUiIsImlhdCI6MTcyMzA3NjMxOSwiZXhwIjoxNzIzMTEyMzE5fQ.BtRBWZ0fXgiSppQR2H1a2RZmAyrnhY4kOtijcPQAcuw'
        }
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response format');
      }

      const data = await res.json();
      const newData = data.map((letter: Letter) => ({
        ...letter,
        content: letter.content.replace(/\n/g, ' ')
      }));
      setData(newData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          data.length > 0 ? (
            <>
              <div className='flex flex-col gap-3 mt-3'>
                {data.map((letter, index) => (
                  <div
                    key={letter.shareKey}
                    className='h-[138px] overflow-hidden rounded-lg flex'
                    onClick={() => letter.typeCode === 0 ? router.push(`/letter/${letter.shareKey}`) : router.push(`/letter/${letter.shareKey}?isReply=true`)}
                  >
                    <div className={`w-[10px] ${letter.typeCode === 0 ? 'bg-primary' : 'bg-accent'}`}></div>
                    <div className='flex flex-col gap-2 p-5 bg-white flex-1'>
                      <span className='text-black/80 text-lg font-bold'>{data.length - index}st {letter.typeCode === 0 ? '받은' : '보낸'} 편지</span>
                      <span className='text-black/40 text-sm text-ellipsis overflow-hidden line-clamp-3'>{letter.content.replace(/\n/g, ' ')}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='text-black/40 text-sm mt-6'>
                내새꾸와의 편지는 10회만 이용할 수 있습니다.편지 이용 횟수를 제한하는 이유는 보호자님이 편지를 통해 미완의 감정을 해결하고, 상실감으로부터 벗어날 수 있도록 도움을 드리고자 하는 이유입니다.
              </div>
            </>
          ) :
            (
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