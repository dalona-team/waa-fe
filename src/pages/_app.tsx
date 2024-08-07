/* eslint-disable @next/next/no-img-element */
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
import { ModalProvider } from '@/hooks/useModal';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A9058', // primary color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#909195', // secondary color
    },
    info: {
      main: '#d6d6d6', // info color
      contrastText: '#2b312f',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'NanumSquareNeo',
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

function MyApp({ Component, pageProps }: AppProps) {
  const { layoutClassName, ...rest} = pageProps;

  return (
    <ThemeProvider theme={theme}>
      <ThemeModeProvider>
        <FormProvider>
          <ToastMessageProvider>
            <ModalProvider>
              <Layout className={layoutClassName}>
                <Component {...rest} />
                <ToastMessage />
              </Layout>
            </ModalProvider>
          </ToastMessageProvider>
        </FormProvider>
      </ThemeModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;