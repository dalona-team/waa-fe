import theme from '@/styles/theme';
import '@/styles/font.css';
import '@/styles/tailwind.css';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { ToastMessageProvider } from '@/hooks/useToastMessage';
import ToastMessage from '@/components/toastMessage/ToastMessage';
import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import HeaderLayout from '@/components/layout/HeaderLayout';
import NavLayout from '@/components/layout/NavLayout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ToastMessageProvider>
            {Component.name === 'CreatePage' ? (
              <HeaderLayout>
                <Component {...pageProps} />
              </HeaderLayout>
            ) : (
              <NavLayout>
                <Component {...pageProps} />
              </NavLayout>
            )}
            <ToastMessage />
          </ToastMessageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;