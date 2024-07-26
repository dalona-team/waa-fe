/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Box, TextField, FormControl, FormLabel, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';
import FormWrapper from '@/components/form/FormWrapper';
import { useRouter } from 'next/router';
import { useForm } from '@/hooks/useForm';

export default function Step2() {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormWrapper
      titleElement={<>
        내새꾸가 좋아하는 장난감, 간식 또는 특별한 추억이 있으면 알려주시겠어요?
        <TextField
          fullWidth
          margin="normal"
          placeholder="100글자까지 입력 가능합니다."
          multiline
          rows={4}
          variant="outlined"
          name="extraInfo"
          value={formData.extraInfo}
          onChange={handleInputChange}
        /></>}
      formElement={
        <Box component="form" noValidate autoComplete="off">
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">내새꾸 사진을 보여주시겠어요?</FormLabel>
            <Button variant="outlined" component="label" sx={{ mt: 2 }}>
              사진 첨부하기
              <input type="file" hidden onChange={handleImageChange} />
            </Button>
            {previewImage && (
              <Box mt={2}>
                <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
              </Box>
            )}
          </FormControl>
          <FormControl component="fieldset" margin="normal">
            <FormControlLabel
              control={<Checkbox />}
              label="개인정보 수집 및 이용에 동의합니다."
            />
            <Typography variant="body2" color="primary" component="a" href="#">
              상세보기
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="서비스 이용약관에 동의합니다."
            />
            <Typography variant="body2" color="primary" component="a" href="#">
              상세보기
            </Typography>
          </FormControl>
        </Box>
      }
      buttonElement={
        <>
          <button className='w-1/4 h-14 text-white bg-black/80' onClick={() => router.push('/form/step1')}><span>이전</span></button>
          <button className='w-3/4 h-14 text-white bg-primary' onClick={() => router.push('/loading')}><span>다음</span></button>
        </>      }
    />
  );
}