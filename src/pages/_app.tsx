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
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { layoutClassName, ...rest} = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastMessageProvider>
          <Layout>
            <Component {...rest} />
            <ToastMessage />
          </Layout>
        </ToastMessageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;