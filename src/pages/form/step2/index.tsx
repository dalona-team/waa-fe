/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useMemo, useRef, useState } from 'react';
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


type Props = {
  characterOptions: {
    groupId: string,
    groupName: string,
    code: number,
    codeName: string,
    orders: number,
    useYn: 'Y' | 'N'
  }[];
};


export default function Step2({characterOptions}: Props) {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const {setToastMessage} = useToastMessage();
  const {showModal} = useModal();
  const [petImage, setPetImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [privacyAgree, setPrivacyAgree] = useState<boolean>(true);
  const [serviceAgree, setServiceAgree] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);


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

  const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPetImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleResetImage = useCallback(() => {
    setPreviewImage(null);
    setPetImage(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    const petReqDto = {
      name: formData.name,
      species: formData.species,
      ownerNickname: formData.ownerNickname === 'special' ? null : formData.ownerNickname,
      specialOwnerNickname: formData.specialOwnerNickname,
      toyAndTreat: formData.toyAndTreat,
      memory: formData.memory,
      petInfos: characterOptions.filter(item => formData.character?.includes(String(item.code))).map(item => ({ groupId: 'G0001', code: item.code })),
    };

    const formDataReq = new FormData();
    formDataReq.append('petReqDto', JSON.stringify(petReqDto)); // JSON 데이터를 문자열로 추가
    if (petImage) formDataReq.append('petImage', petImage);

    try {
      const response = await fetch('http://223.130.153.29:8080/pet', {
        method: 'POST',
        body: formDataReq,
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const data = await response.json();
      router.push(`/loading?petId=${data.id}`);
    } catch (error) {
      setToastMessage({ show: true, body: '오류가 발생했습니다.' });
    }
  }, [characterOptions, formData, petImage, router, setToastMessage]);

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
    <Wrapper
      disableBorder
      formElement={
        <Box component="form" noValidate autoComplete="off">
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend" className='pb-4'><span className='font-bold text-base text-gray-950'>{formData.name.length ? formData.name : '내새꾸'}{isEndsWithConsonant ? '이' : ''}의 성격을 알려주세요. (중복 선택 가능)</span></FormLabel>
            <FormGroup row className='mt-4' onChange={handleCheckboxChange}>
              {
                characterOptions.map(item => (
                  <FormControlLabel key={item.code} className='w-1/2 !mr-0' value={item.code} label={item.codeName} control={<Checkbox checked={formData.character?.includes(String(item.code)) || false}  />} sx={{ '& .MuiTypography-root': { fontSize: '15px' } }} />
                ))
              }
            </FormGroup>
          </FormControl>
          <div className='px-5 border border-line1 border-dashed my-4'></div>
          <FormControl sx={{ display: 'flex', flexDirection: 'column'}}>
            <FormLabel component="legend">
              <span className='font-bold text-base text-gray-950'>{formData.name.length ? formData.name : '내새꾸'}{isEndsWithConsonant ? '이' : ''}가 좋아하는 장난감, 간식을 알려주시겠어요?</span>
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
          <div className='px-5 border border-line1 border-dashed my-4'></div>
          <FormControl sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '16px'}}>
            <FormLabel component="legend">
              <span className='font-bold text-base text-gray-950'>{formData.name.length ? formData.name : '내새꾸'}{isEndsWithConsonant ? '이' : ''}와 함께한 특별한 추억이 있으면 알려주시겠어요?</span>
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
              sx={{height: '110px', '& .MuiInputBase-root': {height: '168px', fontSize: '15px'}}}
            />
          </FormControl>
          <div className='px-5 border border-line1 border-dashed my-4'></div>
          <div className='flex justify-between items-center'>
            <div className='font-bold text-base text-gray-950'>{formData.name.length ? formData.name : '내새꾸'} 사진을 <br />보여주시겠어요?</div>
            <div>
              {!previewImage ? (<button type='button' className='w-[100px] h-[100px] px-3 py-3 border-2 border-line1 border-dashed' onClick={handleButtonClick}>
                <span className='text-base text-gray-800'>사진<br />첨부하기</span>
                <input type="file" hidden ref={fileInputRef} onChange={handleImageChange} accept="image/jpeg, image/png, image/heic"/>
              </button>):(
                <div className='w-[100px] h-[100px] relative'>
                  <img className='w-full h-full object-cover object-center' src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
                  <button type='button' className='absolute top-0 right-0 w-5 h-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.40)'}} onClick={handleResetImage}>
                    <Image src="/images/icon_close.svg" alt="닫기버튼" width={24} height={24} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='h-2 bg-line1 my-4'></div>
          <FormControl className='w-full' component="fieldset" margin="normal">
            <div className='w-full flex items-center justify-between'>
              <FormControlLabel
                control={<Checkbox checked={privacyAgree} onChange={(e) => setPrivacyAgree(e.target.checked)} />}
                label="개인정보 수집 및 이용에 동의합니다."
                sx={{fontSize: '16px'}}
              />
              <span className='text-base text-gray-400 w-[60px] cursor-pointer' onClick={handleOpenPrivacy}>상세보기</span>
            </div>
            <div className='w-full flex items-center justify-between'>
              <FormControlLabel
                control={<Checkbox checked={serviceAgree} onChange={(e) => setServiceAgree(e.target.checked)} />}
                label="서비스 이용약관에 동의합니다."
                sx={{fontSize: '16px'}}
              />
              <span className='text-base text-gray-400 w-[60px] cursor-pointer' onClick={handleOpenService}>상세보기</span>
            </div>
          </FormControl>
        </Box>
      }
      buttonElement={
        <div className='flex gap-1.5'>
          <button className='w-1/4 h-14 text-white bg-secondary rounded-[20px]' onClick={() => router.push('/form/step1')}><span>이전</span></button>
          <button className='w-3/4 h-14 text-white bg-primary rounded-[20px]' onClick={handleSubmit}><span>다음</span></button>
        </div>
      }
    />
  );
}

// eslint-disable-next-line no-unused-vars
export const getServerSideProps: GetServerSideProps = async (_context) => {
  const res = await fetch('http://223.130.153.29:8080/info?groupId=G0001');
  const data = await res.json();
  const options = data.filter((item: any) => item.useYn === 'Y').map((item: any) => ({
    code: item.code,
    codeName: item.codeName,
  }));

  return {
    props: {
      layoutClassName: 'bg-white',
      characterOptions: options,
    },
  };
};