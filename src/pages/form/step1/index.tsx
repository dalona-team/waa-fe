import React, { useState } from 'react';
import FormWrapper from '@/components/form/FormWrapper';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';

export default function Step1() {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const [specialChecked, setSpecialChecked] = useState(formData.ownerNickname === 'special');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData({ ownerNickname: value });
    setSpecialChecked(value === 'special');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  return (
    <FormWrapper
      titleElement={'별나라에서 내새꾸를 찾기 위해 필수 정보를 입력해주세요.'}
      formElement={
        <Box component="form" noValidate autoComplete="off">
          <TextField
            required
            fullWidth
            margin="normal"
            label="내새꾸 이름"
            placeholder="내새꾸 이름을 알려주세요."
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <FormLabel component="legend" required sx={{ marginRight: 2, flex: 1 }}>
              반려동물
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
              />
              <FormControlLabel
                value="CAT"
                control={<Radio />}
                label="고양이"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend" required>당신을 어떻게 불렀나요?</FormLabel>
            <RadioGroup row onChange={handleRadioChange} value={formData.ownerNickname}>
              <FormControlLabel className='w-20' value="mom" control={<Radio />} label="엄마" />
              <FormControlLabel className='w-20' value="dad" control={<Radio />} label="아빠" />
              <FormControlLabel className='w-20' value="owner" control={<Radio />} label="집사" />
              <FormControlLabel className='w-20' value="sister" control={<Radio />} label="언니" />
              <FormControlLabel className='w-20' value="brother" control={<Radio />} label="오빠" />
              <FormControlLabel className='w-30' value="special" control={<Radio />} label="특별한 명칭" />
            </RadioGroup>
            {specialChecked && (
              <TextField
                fullWidth
                margin="normal"
                placeholder="특별한 명칭을 알려주세요"
                variant="outlined"
                name="extraDesc"
                value={formData.extraDesc}
                onChange={handleInputChange}
              />
            )}
          </FormControl>
        </Box>
      }
      buttonElement={
        <>
          <button className='w-1/4 h-14 text-white bg-black/80' onClick={() => router.push('/')}><span>이전</span></button>
          <button className='w-3/4 h-14 text-white bg-primary' onClick={() => router.push('/form/step2')}><span>다음</span></button>
        </>
      }
    />
  );
}