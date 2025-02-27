/* eslint-disable @next/next/no-img-element */
import { createTheme, alpha } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4964FF', // primary color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#575A5A', // secondary color
    },
    info: {
      main: '#4964FF29', // info color
      contrastText: '#4964FF',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '15px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '44px',
          borderColor: '#1A9058'
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        icon: <img src="/images/checkbox_empty.svg" alt="Checkbox Empty" />, // 기본 아이콘
        checkedIcon: <img src="/images/checkbox_checked.svg" alt="Checkbox Checked" />, // 체크된 상태의 아이콘
      },
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            color: alpha('#EA98E0', 0.4), // 리플 효과의 색상
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <img src="/images/checkbox_empty.svg" alt="Checkbox Empty" />, // 기본 아이콘
        checkedIcon: <img src="/images/checkbox_checked.svg" alt="Checkbox Checked" />, // 체크된 상태의 아이콘
      },
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            color: alpha('#EA98E0', 0.4), // 리플 효과의 색상
          },
        },
      },
    }
  },
});

export default theme;