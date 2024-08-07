import React, { useCallback, useState } from 'react';
import {  FormControl, FormControlLabel, Checkbox } from '@mui/material';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';
import { useModal } from '@/hooks/useModal';
import { useToastMessage } from '@/hooks/useToastMessage';
import Privacy from '@/components/privacy';
import Service from '@/components/service';
import Head from 'next/head';

export default function Step2() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { formData, setFormData } = useForm();
  const {setToastMessage} = useToastMessage();
  const {showModal} = useModal();
  const [privacyAgree, setPrivacyAgree] = useState<boolean>(true);
  const [serviceAgree, setServiceAgree] = useState<boolean>(true);

  const handleSubmit = useCallback(async () => {
    try {
      const response = await fetch('/api/pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          species: formData.species,
          ownerNickname: formData.ownerNickname === 'special' ? null : formData.ownerNickname,
          specialOwnerNickname: formData.specialOwnerNickname,
          toyAndTreat: formData.toyAndTreat,
          memory: formData.memory,
          petInfos: formData.character?.map((code: string) => ({ groupId: 'G0001', code: code })),
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
  }, [formData, router, setToastMessage]);

  const handleOpenPrivacy = () => {
    showModal(
      <Privacy />
    );
  };

  const handleOpenService = () => {
    showModal(
      <Service />
    );
  };

  return (
    <>
      <Head>
        <title>젤리레터 🐾💌 {formData.name ? `- ${formData.name}` : ''}</title>
      </Head>
      <Wrapper
        disableBorder
        hasProgressBar={true}
        percent={94}
        formElement={
          <>
            <div className='flex flex-col gap-1 justify-center items-center'>
              <div className='text-base font-bold text-b940 text-lg text-center'>편지를 받기 위해서는<br />약관 전체에 동의가 필요합니다.</div>
              <FormControl
                className="w-full max-w-[270px]"
                component="fieldset"
                margin="normal"
              >
                <div className="w-full flex items-center justify-between">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={privacyAgree}
                        onChange={(e) => setPrivacyAgree(e.target.checked)}
                      />
                    }
                    label="개인정보 수집 및 이용에 동의"
                    sx={{ fontSize: '15px', flex: 1 }}
                  />
                  <span
                    className="text-base text-gray-400 w-[30px] cursor-pointer"
                    onClick={handleOpenPrivacy}
                  >
                  보기
                  </span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={serviceAgree}
                        onChange={(e) => setServiceAgree(e.target.checked)}
                      />
                    }
                    label="서비스 이용약관에 동의"
                    sx={{ fontSize: '15px', flex: 1 }}
                  />
                  <span
                    className="text-base text-gray-400 w-[30px] cursor-pointer"
                    onClick={handleOpenService}
                  >
                  보기
                  </span>
                </div>
              </FormControl>
            </div>
          </>
        }
        buttonElement={
          <div className="flex gap-1.5">
            <button
              className="w-1/4 h-14 text-white bg-secondary rounded-[20px]"
              onClick={() => router.push('/form/step2')}
            >
              <span>이전</span>
            </button>
            <button
              className="w-3/4 h-14 text-white bg-accent rounded-[20px]"
              onClick={handleSubmit}
            >
              <span>편지 신청하기</span>
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