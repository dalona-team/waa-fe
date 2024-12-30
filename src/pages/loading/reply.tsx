import { useToastMessage } from '@/hooks/useToastMessage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useCallback, useState } from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';

export default function Loading() {
  const router = useRouter();
  const hasFetched = useRef(false); // API 요청이 한 번만 실행되도록 하기 위한 플래그
  const { setToastMessage } = useToastMessage();

  const [petName, setPetName] = useState<string>('');
  const [petSpecies, setPetSpecies] = useState<string>('');


  const fetchData = useCallback(async () => {
    const token = Cookies.get('accessToken');
    const { petId } = router.query;

    if (petId && !hasFetched.current) {
      hasFetched.current = true; // API 요청이 실행되었음을 표시
      router.replace(router.pathname, undefined, { shallow: true });

      try {
        const response = await fetch(
          'https://www.jellyletter.site:8080/api/letter/pet-reply',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token || '',
            },
            body: JSON.stringify({
              id: petId,
            }),
          }
        );
        if (!response.ok) {
          if (response.status === 401) {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            router.push('/');
            return;
          } else {
            throw new Error('Failed to fetch data');
          }
        }

        const data = await response.json();
        router.push(`/letter/${data.shareKey}`);
      } catch (error) {
        setToastMessage({ show: true, body: '오류가 발생했습니다.' });
        router.push('/');
      }
    }
  }, [router, setToastMessage]);

  useEffect(() => {
    const petName = localStorage.getItem('petName');
    const petSpecies = localStorage.getItem('petSpecies');
    setPetName(petName || '');
    setPetSpecies(petSpecies || '');
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>젤리레터 🐾💌</title>
      </Head>
      <div className="flex justify-center items-center flex-col gap-2 h-full">
        <Image
          priority
          className="floating pb-7"
          src="/images/img_loading.svg"
          alt="로딩 이미지"
          width={90}
          height={60}
        />
        <div className="text-center text-black/80 text-lg font-bold">
          {petName.length ? petName : '내새꾸'}에게 잘 전달하였어요
          <br />
          지금 답장을 작성하고 있다네요^^
        </div>
        <div className="text-center text-black/40 text-sm font-bold">
          {petName.length ? petName : '내새꾸'}가
          {petSpecies.length
            ? petSpecies === 'DOG'
              ? ' 강아지 언어'
              : ' 고양이 언어'
            : ' 강아지 언어/고양이 언어'}
          로 답장을 작성중이에요.
          <br />
          잠시만 기다려 주세요!
        </div>
      </div>
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