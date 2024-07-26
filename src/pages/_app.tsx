import '@/styles/font.css';
import '@/styles/tailwind.css';
import '@/styles/global.css';
import '@/styles/animation.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { FormProvider } from '@/hooks/useForm';
import { ThemeModeProvider } from '@/hooks/useThemeMode';
import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastMessageProvider } from '@/hooks/useToastMessage';
import ToastMessage from '@/components/toastMessage/ToastMessage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A9058', // primary color
    },
    secondary: {
      main: '#909195', // secondary color
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'NanumSquareNeo',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '44px',
          borderColor: alpha('#000000', 0.16),
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
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeModeProvider>
        <FormProvider>
          <ToastMessageProvider>
            <Layout>
              <Component {...pageProps} />
              <ToastMessage />
            </Layout>
          </ToastMessageProvider>
        </FormProvider>
      </ThemeModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;