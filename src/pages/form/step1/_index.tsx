import React, { useCallback } from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';
import { useToastMessage } from '@/hooks/useToastMessage';
import Head from 'next/head';

export default function Step1() {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const {setToastMessage} = useToastMessage();

  const handleRadioChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData({ ownerNickname: value });
  }, [setFormData]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
    if (formData.ownerNickname !== 'special' && name === 'specialOwnerNickname' && value.length > 0) {
      setFormData({ ownerNickname: 'special' });
    }
  }, [formData.ownerNickname, setFormData]);

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
            <div className="text-base font-bold">
              별나라에서 내새꾸를 찾기 위해 필수 정보를 입력해주세요.
            </div>
            <Box component="form" noValidate autoComplete="off">
              <FormControl
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FormLabel
                  component="legend"
                  sx={{ marginRight: 2, width: '100px' }}
                >
                  <i className="required">*</i>
                  <span className="font-bold text-base text-gray-950">
                    이름
                  </span>
                </FormLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="내새꾸 이름을 알려주세요."
                  variant="outlined"
                  color="primary"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{ flex: 1 }}
                />
              </FormControl>
              <div className="px-5 border border-line1 border-dashed my-4"></div>
              <FormControl
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FormLabel
                  component="legend"
                  sx={{ marginRight: 2, width: '100px' }}
                >
                  <i className="required">*</i>
                  <span className="font-bold text-base text-gray-950">
                    반려동물
                  </span>
                </FormLabel>
                <RadioGroup
                  row
                  sx={{ flex: 1 }}
                  name="species"
                  value={formData.species}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="DOG"
                    control={<Radio />}
                    label="강아지"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                  <FormControlLabel
                    value="CAT"
                    control={<Radio />}
                    label="고양이"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                </RadioGroup>
              </FormControl>
              <div className="px-5 border border-line1 border-dashed my-4"></div>
              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend" className="pb-4">
                  <i className="required">*</i>
                  <span className="font-bold text-base text-gray-950">
                    당신을 어떻게 불렀나요?
                  </span>
                </FormLabel>
                <RadioGroup
                  row
                  onChange={handleRadioChange}
                  value={formData.ownerNickname}
                >
                  <FormControlLabel
                    className="w-1/3 !mr-2"
                    value="엄마"
                    control={<Radio />}
                    label="엄마"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                  <FormControlLabel
                    className="w-1/3 !mr-2"
                    value="아빠"
                    control={<Radio />}
                    label="아빠"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                  <FormControlLabel
                    className="w-1/3 !mr-2"
                    value="집사"
                    control={<Radio />}
                    label="집사"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                  <FormControlLabel
                    className="w-1/3 !mr-2"
                    value="언니"
                    control={<Radio />}
                    label="언니"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                  <FormControlLabel
                    className="w-1/3 !mr-2"
                    value="누나"
                    control={<Radio />}
                    label="누나"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                  <FormControlLabel
                    className="w-1/3 !mr-2"
                    value="오빠"
                    control={<Radio />}
                    label="오빠"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                  <FormControlLabel
                    className="w-30"
                    value="special"
                    control={<Radio />}
                    label="특별한 명칭"
                    sx={{ '& .MuiTypography-root': { fontSize: '15px' } }}
                  />
                </RadioGroup>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="특별한 명칭을 알려주세요."
                  variant="outlined"
                  name="specialOwnerNickname"
                  value={formData.specialOwnerNickname}
                  onChange={handleInputChange}
                  sx={{ '& .MuiInputBase-input': { fontSize: '15px' } }}
                />
              </FormControl>
            </Box>
          </>
        }
        buttonElement={
          <div className="flex gap-1.5">
            <button
              className="w-1/4 h-14 text-white bg-secondary rounded-[20px]"
              onClick={() => router.push('/')}
            >
              <span>이전</span>
            </button>
            <button
              className="w-3/4 h-14 text-white bg-primary rounded-[20px]"
              onClick={validate}
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
      layoutClassName: 'bg-white',
    },
  };
}