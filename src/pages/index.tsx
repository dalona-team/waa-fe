import HomeDay from '@/components/home/HomeDay';
import HomeNight from '@/components/home/HomeNight';
import { useThemeMode } from '@/hooks/useThemeMode';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const {mode} = useThemeMode();

  useEffect(() => {
    localStorage.removeItem('previewImage');
  }, [mode]);

  if(mode.isDay === undefined) return <></>;

  return (
    <>
      <Head>
        <title>젤리레터 🐾💌</title>
      </Head>
      ;{mode.isDay ? <HomeDay /> : <HomeNight />}
    </>
  );
}

