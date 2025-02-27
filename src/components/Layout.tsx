import React from 'react';
import NavigationBar from './NavigationBar';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  if(isLoginPage) {
    return (
      <div>
        {children}
      </div>
    );
  }

  return (
    <div
      className="invisible-scroll min-w-[1280px] min-h-screen"
    >
      <div className="flex">
        <NavigationBar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;