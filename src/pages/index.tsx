import { useEffect, useState } from 'react';
import HomeDay from '@/components/home/HomeDay';
import HomeNight from '@/components/home/HomeNight';

export default function Home() {
  const [isDayTime, setIsDayTime] = useState<boolean | undefined>(true);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    setIsDayTime(hours >= 8 && hours < 19);
  }, []);

  if(isDayTime === undefined) return <></>;

  return (
    <>{isDayTime ? <HomeDay /> : <HomeNight />}</>
  );
}

