import { useForm } from '@/hooks/useForm';
import { useToastMessage } from '@/hooks/useToastMessage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function Loading() {
  const router = useRouter();
  const hasFetched = useRef(false); // API 요청이 한 번만 실행되도록 하기 위한 플래그
  const { resetFormData } = useForm();
  const {setToastMessage} = useToastMessage();

  useEffect(() => {
    resetFormData();
    const fetchData = async () => {
      const { petId } = router.query;

      if (petId && !hasFetched.current) {
        hasFetched.current = true; // API 요청이 실행되었음을 표시
        router.replace(router.pathname, undefined, { shallow: true });

        try {
          const response = await fetch('http://223.130.153.29:8080/letter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: petId }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const data = await response.json();
          router.push(`/letter/${data.shareKey}`);

        } catch (error) {
          setToastMessage({ show: true, body: '오류가 발생했습니다.' });
        }
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, router.pathname]);

  return (
    <div className="flex justify-center items-center flex-col gap-2 h-full">
      <Image className='floating pb-7' src="/images/img_loading.svg" alt="로딩 이미지" width={90} height={60} />
      <div className="text-center text-black/95 text-lg font-bold">별나라에서<br/>내새꾸를 찾는 중이에요</div>
      <div className="text-center text-black/40 text-sm font-bold">강아지어를 한국어로 번역하기 때문에<br/> 오류가 발생할 수 있습니다!</div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layoutClassName: 'bg-mint',
    },
  };
}