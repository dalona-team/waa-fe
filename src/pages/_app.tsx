import theme from '@/styles/theme';
import '@/styles/font.css';
import '@/styles/tailwind.css';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { ToastMessageProvider } from '@/hooks/useToastMessage';
import ToastMessage from '@/components/toastMessage/ToastMessage';
import { ModalProvider } from '@/hooks/useModal';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { layoutClassName, ...rest} = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastMessageProvider>
          <ModalProvider>
            <Layout className={layoutClassName}>
              <Component {...rest} />
              <ToastMessage />
            </Layout>
          </ModalProvider>
        </ToastMessageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;