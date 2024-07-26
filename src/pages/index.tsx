import HomeDay from '@/components/home/HomeDay';
import HomeNight from '@/components/home/HomeNight';
import { useThemeMode } from '@/hooks/useThemeMode';

export default function Home() {
  const {mode} = useThemeMode();

  if(mode.isDay === undefined) return <></>;

  return (
    <>{mode.isDay ? <HomeDay /> : <HomeNight />}</>
  );
}

