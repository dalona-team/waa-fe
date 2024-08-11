import React, { useCallback, useState } from 'react';
import { TextField } from '@mui/material';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';
import Head from 'next/head';

export default function Step2() {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const [step, setStep] = useState(1);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  }, [setFormData]);

  return (
    <>
      <Head>
        <title>젤리레터 🐾💌 {formData.name ? `- ${formData.name}` : ''}</title>
      </Head>
      <Wrapper
        disableBorder
        hasProgressBar={true}
        percent={(step + 4) * (100 / 7)}
        formElement={
          <>
            {step === 1 && (
              <div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <div className="text-base font-bold text-b940 text-lg text-center">
                    내새꾸가 좋아하는
                    <br />
                    장난감, 간식 알려주시겠어요?
                  </div>
                  <TextField
                    fullWidth
                    margin="normal"
                    placeholder="선택사항이에요"
                    variant="outlined"
                    name="toyAndTreat"
                    value={formData.toyAndTreat}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    sx={{
                      height: '120px',
                      '& .MuiInputBase-root': {
                        fontFamily: 'inherit',
                        height: '168px',
                        fontSize: '15px',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1A9058 !important',
                      },
                    }}
                  />
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    type="button"
                    className="px-4 py-2"
                    onClick={() => router.push('/form/privacy')}
                  >
                    <span className="text-primary text-base">
                      {'입력하지 않고, 바로 편지 신청하기 >'}
                    </span>
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <div className="text-base font-bold text-b940 text-lg text-center">
                    내새꾸와 함께 한<br />
                    특별한 추억을 알려주시겠어요?
                  </div>
                  <TextField
                    fullWidth
                    margin="normal"
                    placeholder="선택사항으로 100글자까지 입력 가능합니다."
                    variant="outlined"
                    name="memory"
                    value={formData.memory}
                    onChange={handleInputChange}
                    multiline
                    rows={5}
                    sx={{
                      height: '150px',
                      '& .MuiInputBase-root': {
                        fontFamily: 'inherit',
                        height: '198px',
                        fontSize: '15px',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1A9058 !important',
                      },
                    }}
                  />
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    type="button"
                    className="px-4 py-2"
                    onClick={() => router.push('/form/privacy')}
                  >
                    <span className="text-primary text-base">
                      {'입력하지 않고, 바로 편지 신청하기 >'}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </>
        }
        buttonElement={
          <div className="flex gap-1.5">
            <button
              className="w-1/4 h-14 text-white bg-black/25 rounded-[20px]"
              onClick={() =>
                step > 1 ? setStep(step - 1) : router.push('/form/step1')
              }
            >
              <span>이전</span>
            </button>
            <button
              className="w-3/4 h-14 text-white bg-primary rounded-[20px]"
              onClick={() =>
                step === 2 ? router.push('/form/privacy') : setStep(step + 1)
              }
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