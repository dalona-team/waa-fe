import React, { useEffect, useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isDayTime, setIsDayTime] = useState<boolean | undefined>(true);

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
      <div className='wrapper'>{children}</div>
    </div>
  );
};

export default Layout;