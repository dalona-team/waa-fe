import { useEffect, useState } from 'react';
import HomeDay from '@/components/home/HomeDay';
import NightDay from '@/components/home/NightDay';

export default function Home() {
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    setIsDayTime(hours >= 8 && hours < 19);
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundImage: isDayTime
          ? 'url(/images/background_day.png)'
          : 'url(/images/background_night.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='wrapper'>{isDayTime ? <HomeDay /> : <NightDay />}</div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      noLayout: true,
    },
  };
}