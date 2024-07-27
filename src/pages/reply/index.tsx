import React, { useState } from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useToastMessage } from '@/hooks/useToastMessage';
import Image from 'next/image';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Reply() {
  const router = useRouter();
  const {setToastMessage} = useToastMessage();
  const [phoneNumber, setPhoneNumber] = useState({ part1: '010', part2: '', part3: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) { // 숫자인지 확인
      setPhoneNumber({ ...phoneNumber, [name]: value });
    }
  };

  const handleSubmit = async () => {
    if(phoneNumber.part2.length < 4 || phoneNumber.part3.length < 4) {
      setToastMessage({ show: true, body: '전화번호를 모두 입력해주세요.' });
      return;
    }
    try {
      const response = await fetch('http://223.130.153.29:8080/heart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userPhone: `${phoneNumber.part1}${phoneNumber.part2}${phoneNumber.part3}` }),
      });
      if(!response.ok) {
        throw new Error('Failed to post data');
      }
      setToastMessage({ show: true, body: '답장이 예약되었습니다.' });
    } catch (error) {
      setToastMessage({ show: true, body: '오류가 발생했습니다.' });
    }
  };

  return (
    <Wrapper
      disableTitle
      disableBorder
      topElement={<div className='flex items-center h-11 w-full mb-2'>
        <Image className='cursor-pointer mx-5' src="/images/icon_home.svg" alt="BigLogoImage" width={24} height={24} onClick={() => router.push('/')} />
      </div>}
      formElement={
        <div className='flex flex-col h-full justify-center items-center gap-5'>
          <div className='w-[200px] text-gray-950 text-center'>답장 기능은 준비 중이에요<br />오픈하면 알려드릴게요!</div>
          <Box display="flex" alignItems="center" gap={1}>
            <div>010</div>
            <span>-</span>
            <TextField
              name="part2"
              value={phoneNumber.part2}
              onChange={handleChange}
              inputProps={{ maxLength: 4 }}
              sx={{
                width: '80px',
                '& input': {
                  padding: '10px !important',
                  backgroundColor: 'inherit !important',
                  color: 'inherit !important',
                }
              }}
            />
            <span>-</span>
            <TextField
              name="part3"
              value={phoneNumber.part3}
              onChange={handleChange}
              inputProps={{ maxLength: 4 }}
              sx={{
                width: '80px',
                '& input': {
                  padding: '10px !important',
                  backgroundColor: 'inherit !important',
                  color: 'inherit !important',
                }
              }}
            />
          </Box>
        </div>
      }
      buttonElement={
        <div className='flex gap-1.5'>
          <button className='w-1/4 h-14 text-white bg-[#909195] rounded-[20px]' onClick={() => router.back()}><span>이전</span></button>
          <button className='w-3/4 h-14 text-white bg-accent rounded-[20px]' onClick={handleSubmit}><span>제출하기</span></button>
        </div>
      }
    />
  );
}


export async function getStaticProps() {
  return {
    props: {
      layoutClassName: 'bg-mint',
    },
  };
}