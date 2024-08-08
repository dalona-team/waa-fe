/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, TextField, FormControl, FormLabel, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { useModal } from '@/hooks/useModal';
import { useToastMessage } from '@/hooks/useToastMessage';
import Privacy from '@/components/privacy';
import Service from '@/components/service';
import * as hangul from 'hangul-js';
import Head from 'next/head';

export default function Step2() {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const {setToastMessage} = useToastMessage();
  const {showModal} = useModal();
  const [privacyAgree, setPrivacyAgree] = useState<boolean>(true);
  const [serviceAgree, setServiceAgree] = useState<boolean>(true);


  const isEndsWithConsonant = useMemo(() => {
    return hangul.endsWithConsonant(formData.name);
  }, [formData.name]);

  const handleCheckboxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setFormData({ character: [...formData.character ?? [], value] });
    } else {
      setFormData({ character: formData.character?.filter(item => item !== value) });
    }
  }, [formData.character, setFormData]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  }, [setFormData]);

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
        formElement={
          <Box component="form" noValidate autoComplete="off">
            <div className="px-5 border border-line1 border-dashed my-4"></div>
            <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel component="legend">
                <span className="font-bold text-base text-gray-950">
                  {formData.name.length ? formData.name : '내새꾸'}
                  {isEndsWithConsonant ? '이' : ''}가 좋아하는 장난감, 간식을
                  알려주시겠어요?
                </span>
              </FormLabel>
              <TextField
                fullWidth
                margin="normal"
                placeholder="장난감, 간식을 알려주세요."
                variant="outlined"
                name="toyAndTreat"
                value={formData.toyAndTreat}
                onChange={handleInputChange}
                sx={{ '& .MuiInputBase-input': { fontSize: '15px' } }}
              />
            </FormControl>
            <div className="px-5 border border-line1 border-dashed my-4"></div>
            <FormControl
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '16px',
              }}
            >
              <FormLabel component="legend">
                <span className="font-bold text-base text-gray-950">
                  {formData.name.length ? formData.name : '내새꾸'}
                  {isEndsWithConsonant ? '이' : ''}와 함께한 특별한 추억이
                  있으면 알려주시겠어요?
                </span>
              </FormLabel>
              <TextField
                fullWidth
                margin="normal"
                placeholder="100글자까지 입력 가능합니다."
                variant="outlined"
                name="memory"
                value={formData.memory}
                onChange={handleInputChange}
                multiline
                rows={4}
                sx={{
                  height: '110px',
                  '& .MuiInputBase-root': { height: '168px', fontSize: '15px' },
                }}
              />
            </FormControl>
            <div className="px-5 border border-line1 border-dashed my-4"></div>
            <div className="h-[1px] bg-line1 my-4"></div>
            <FormControl
              className="w-full"
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
                  label="개인정보 수집 및 이용에 동의합니다."
                  sx={{ fontSize: '15px', flex: 1 }}
                />
                <span
                  className="text-base text-gray-400 w-[60px] cursor-pointer"
                  onClick={handleOpenPrivacy}
                >
                  상세보기
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
                  label="서비스 이용약관에 동의합니다."
                  sx={{ fontSize: '15px', flex: 1 }}
                />
                <span
                  className="text-base text-gray-400 w-[60px] cursor-pointer"
                  onClick={handleOpenService}
                >
                  상세보기
                </span>
              </div>
            </FormControl>
          </Box>
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
              className="w-3/4 h-14 text-white bg-primary rounded-[20px]"
              onClick={handleSubmit}
            >
              <span>다음</span>
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