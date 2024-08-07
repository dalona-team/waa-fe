import { useForm } from '@/hooks/useForm';
import { useToastMessage } from '@/hooks/useToastMessage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useCallback } from 'react';
import * as hangul from 'hangul-js';
import Head from 'next/head';

export default function Loading() {
  const router = useRouter();
  const hasFetched = useRef(false); // API 요청이 한 번만 실행되도록 하기 위한 플래그
  const { formData } = useForm();
  const { setToastMessage } = useToastMessage();

  const isEndsWithConsonant = useMemo(() => {
    return hangul.endsWithConsonant(formData.name);
  }, [formData.name]);

  const fetchData = useCallback(async () => {
    const { petId } = router.query;

    if (petId && !hasFetched.current) {
      hasFetched.current = true; // API 요청이 실행되었음을 표시
      router.replace(router.pathname, undefined, { shallow: true });

      try {
        const response = await fetch('/api/letter/pet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: petId,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
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
    fetchData();
  }, [fetchData]);

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
        <div className="text-center text-black/95 text-lg font-bold">
          {formData.species
            ? formData.species === 'DOG'
              ? '강아지별'
              : '고양이별'
            : '별나라'}
          에서
          <br />
          {formData.name.length ? formData.name : '내새꾸'}
          {isEndsWithConsonant ? '이' : ''}를 찾는 중이에요
        </div>
        <div className="text-center text-black/40 text-sm font-bold">
          {formData.species
            ? formData.species === 'DOG'
              ? '강아지어'
              : '고양이어'
            : '강아지어/고양이어'}
          를 한국어로 번역하기 때문에
          <br /> 오류가 발생할 수 있습니다!
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