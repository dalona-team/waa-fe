import '@/styles/font.css';
import '@/styles/tailwind.css';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps & { noLayout?: boolean }) {
  const { noLayout, ...rest } = pageProps;

  if (noLayout) {
    return <Component {...rest} />;
  }

  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
}