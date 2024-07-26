import { useThemeMode } from '@/hooks/useThemeMode';
import React from 'react';

const Layout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { mode } = useThemeMode();

  return (
    <div
      className="container"
      style={{
        backgroundImage: mode.isDay
          ? 'url(/images/background_day.png)'
          : 'url(/images/background_night.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`wrapper ${className}`}>{children}</div>
    </div>
  );
};

export default Layout;