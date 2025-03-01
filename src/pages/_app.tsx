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
import CreateLayout from './create/layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ToastMessageProvider>
            {Component.name === 'CreatePage' ? (
              <CreateLayout>
                <Component {...pageProps} />
              </CreateLayout>
            ) : (
              <Component {...pageProps} />
            )}
            <ToastMessage />
          </ToastMessageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;