import '@/styles/font.css';
import '@/styles/tailwind.css';
import '@/styles/global.css';
import '@/styles/animation.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { FormProvider } from '@/hooks/useForm';

export default function App({ Component, pageProps }: AppProps & { noLayout?: boolean }) {
  const { noLayout, ...rest } = pageProps;

  if (noLayout) {
    return (
      <FormProvider>
        <Component {...rest} />
      </FormProvider>
    );
  }

  return (
    <Layout>
      <FormProvider>
        <Component {...rest} />
      </FormProvider>
    </Layout>
  );
}