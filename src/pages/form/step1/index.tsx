import React, { useCallback, useState } from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';
import { useToastMessage } from '@/hooks/useToastMessage';
import Head from 'next/head';
import CustomChip from '@/components/CustomChip';
import { GetServerSideProps } from 'next';

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

export default function Step1({characterOptions}: Props) {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const {setToastMessage} = useToastMessage();
  const [step, setStep] = useState(1);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  }, [setFormData]);

  const handleCharacterChange = useCallback((type: 'add' | 'remove', value: string) => {
    if (type === 'add') {
      setFormData({ character: [...formData.character ?? [], value] });
    } else {
      setFormData({ character: formData.character?.filter(item => item !== value) });
    }
  }, [formData.character, setFormData]);

  const validate = useCallback(() => {
    if (!formData.name || !formData.species || (formData.ownerNickname === 'special' && !formData.specialOwnerNickname) || !formData.ownerNickname) {
      setToastMessage({ show: true, body: '필수 내용을 입력해주세요.' });
      return;
    }
    router.push('/form/step2');
  }, [formData, router, setToastMessage]);

  return (
    <>
      <Head>
        <title>젤리레터 🐾💌</title>
      </Head>
      <Wrapper
        disableBorder
        formElement={
          <>
            {step === 1 && <div className='flex flex-col gap-1 justify-center items-center'>
              <div className='text-base font-bold text-b940 text-lg'>내새꾸 이름을 알려주세요.</div>
              <TextField
                className='max-w-[240px]'
                fullWidth
                margin="normal"
                placeholder="내새꾸 이름을 알려주세요."
                variant="outlined"
                color="primary"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-input': {textAlign: 'center'},
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0px',
                    '& fieldset': {
                      border: 'none',
                      borderBottom: '2px solid #1A9058',
                    },
                    '&:hover fieldset': {
                      borderBottom: '2px solid #1A9058',
                    },
                    '&.Mui-focused fieldset': {
                      borderBottom: '2px solid #1A9058',
                    },
                  }, }}
              />
            </div> }
            {step === 2 &&
            <div className='flex flex-col gap-6 justify-center items-center'>
              <div className='text-base font-bold text-b940 text-lg'>어느 별에서 찾아야 될까요?</div>
              <div className='flex flex-row gap-1.5'>
                <CustomChip
                  label="강아지별"
                  selected={formData.species === 'DOG'}
                  onClick={() => setFormData({ species: 'DOG' })}
                />
                <CustomChip
                  label="고양이별"
                  selected={formData.species === 'CAT'}
                  onClick={() => setFormData({ species: 'CAT' })}
                />
              </div>
            </div>}
            {step === 3 &&
            <div className='flex flex-col gap-6 justify-center items-center'>
              <div className='text-base font-bold text-b940 text-lg'>당신을 어떻게 불렀나요?</div>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-row gap-1.5'>
                  <CustomChip
                    label="엄마"
                    selected={formData.ownerNickname === '엄마'}
                    onClick={() => setFormData({ ownerNickname: '엄마' })}
                  />
                  <CustomChip
                    label="아빠"
                    selected={formData.ownerNickname === '아빠'}
                    onClick={() => setFormData({ ownerNickname: '아빠' })}
                  />
                  <CustomChip
                    label="집사"
                    selected={formData.ownerNickname === '집사'}
                    onClick={() => setFormData({ ownerNickname: '집사' })}
                  />
                </div>
                <div className='flex flex-row gap-1.5'>
                  <CustomChip
                    label="언니"
                    selected={formData.ownerNickname === '언니'}
                    onClick={() => setFormData({ ownerNickname: '언니' })}
                  />
                  <CustomChip
                    label="누나"
                    selected={formData.ownerNickname === '누나'}
                    onClick={() => setFormData({ ownerNickname: '누나' })}
                  />
                  <CustomChip
                    label="오빠"
                    selected={formData.ownerNickname === '오빠'}
                    onClick={() => setFormData({ ownerNickname: '오빠' })}
                  />
                </div>
                <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <CustomChip
                    label="직접 입력하기"
                    selected={formData.ownerNickname === 'special'}
                    onClick={() => setFormData({ ownerNickname: 'special', specialOwnerNickname: '' })}
                  />
                  { formData.ownerNickname === 'special' && <TextField
                    className='max-w-[240px]'
                    fullWidth
                    margin="normal"
                    placeholder="입력해주세요."
                    variant="outlined"
                    color="primary"
                    name="specialOwnerNickname"
                    value={formData.specialOwnerNickname}
                    onChange={handleInputChange}
                    sx={{
                      flex: 1,
                      '& .MuiOutlinedInput-input': {textAlign: 'center'},
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '0px',
                        '& fieldset': {
                          border: 'none',
                          borderBottom: '2px solid #1A9058',
                        },
                        '&:hover fieldset': {
                          borderBottom: '2px solid #1A9058',
                        },
                        '&.Mui-focused fieldset': {
                          borderBottom: '2px solid #1A9058',
                        },
                      }, }}
                  /> }
                </div>
              </div>
            </div>}
            {step === 4 &&
            <div className='flex flex-col gap-6 justify-center items-center'>
              <div className='text-base font-bold text-b940 text-lg'>내새꾸 성격을 모두 선택해 주세요.</div>
              <div className='flex flex-col gap-3 w-[306px]'>
                <div className='grid grid-cols-2 gap-x-1.5 gap-y-3'>
                  {characterOptions.map((item) => (
                    <CustomChip
                      key={item.code}
                      className="rounded-[12px]"
                      label={item.codeName}
                      selected={formData.character?.includes(String(item.code)) || false}
                      onClick={() => handleCharacterChange(formData.character?.includes(String(item.code)) ? 'remove' : 'add', String(item.code))}
                    />
                  ))}
                </div>
              </div>
            </div>}
          </>
        }
        buttonElement={
          <div className="flex gap-1.5">
            <button
              className="w-1/4 h-14 text-white bg-secondary rounded-[20px]"
              onClick={() => step > 1 ? setStep(step - 1) : router.push('/')}
            >
              <span>이전</span>
            </button>
            <button
              disabled={!formData.name || !formData.species || !formData.ownerNickname && !(formData.ownerNickname == 'special' && formData.specialOwnerNickname) || !formData.character?.length}
              className="w-3/4 h-14 text-white bg-primary rounded-[20px]"
              onClick={() => step > 3 ? validate() : setStep(step + 1)}
            >
              <span>다음</span>
            </button>
          </div>
        }
      />
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       layoutClassName: 'bg-mint',
//     },
//   };
// }

// eslint-disable-next-line no-unused-vars
export const getServerSideProps: GetServerSideProps = async (_context) => {
  const res = await fetch('http://www.jellyletter.site:8080/api/info?groupId=G0001');
  const data = await res.json();
  const options = data.filter((item: any) => item.useYn === 'Y').map((item: any) => ({
    code: item.code,
    codeName: item.codeName,
  }));

  return {
    props: {
      layoutClassName: 'bg-mint',
      characterOptions: options,
    },
  };
};