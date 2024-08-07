import React, { useCallback, useEffect, useState } from 'react';
import {  TextField} from '@mui/material';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';
import { useToastMessage } from '@/hooks/useToastMessage';
import Head from 'next/head';

export default function Reply() {
  const router = useRouter();
  const { petId, petName } = router.query;
  const [content, setContent] = useState<string>('');
  const {setToastMessage} = useToastMessage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = useCallback(async () => {
    try {
      const response = await fetch('/api/letter/human-reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          petId: petId,
          content: content
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const data = await response.json();
      router.push(`/loading?petId=${data.id}`);
    } catch (error) {
      setToastMessage({ show: true, body: '오류가 발생했습니다.' });
    }
  }, [content, petId, router, setToastMessage]);

  return (
    <>
      <Head>
        <title>젤리레터 🐾💌 {petName ? `- ${petName}에게 답장` : '내새꾸에게 답장'}</title>
      </Head>
      <Wrapper
        disableBorder
        formElement={
          <div>
            <div className='flex flex-col gap-1 justify-center items-center'>
              <div className='text-base font-bold text-b940 text-lg text-center'>{petName}에게 답장을 작성하시겠어요?</div>
              <TextField
                fullWidth
                margin="normal"
                placeholder="내용을 입력해 주세요."
                variant="outlined"
                name="replyContent"
                value={content}
                onChange={handleInputChange}
                multiline
                rows={20}
                sx={{
                  '& .MuiInputBase-root': {  height: 'auto !important', fontFamily: 'inherit', fontSize: '15px' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#EA98E0 !important' },
                }}
              />
            </div>
          </div>
        }
        buttonElement={
          <div className="flex gap-1.5">
            <button
              className="w-1/4 h-14 text-white bg-secondary rounded-[20px]"
              onClick={() => router.push('/form/step1')}
            >
              <span>이전</span>
            </button>
            <button
              disabled={!content.length}
              className="w-3/4 h-14 text-white bg-accent rounded-[20px]"
              onClick={handleSubmit}
            >
              <span>답장보내기</span>
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