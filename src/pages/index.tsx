import HomeDay from '@/components/home/HomeDay';
import HomeNight from '@/components/home/HomeNight';
import { useThemeMode } from '@/hooks/useThemeMode';
import { useEffect } from 'react';

export default function Home() {
  const {mode} = useThemeMode();

  useEffect(() => {
    localStorage.removeItem('previewImage');
  }, [mode]);

  if(mode.isDay === undefined) return <></>;

  return (
    <>{mode.isDay ? <HomeDay /> : <HomeNight />}</>
  );
}

