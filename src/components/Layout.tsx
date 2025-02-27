import React from 'react';
import NavigationBar from './NavigationBar';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <div
      className="container invisible-scroll"
    >
      <div className="flex">
        {!isLoginPage && <NavigationBar />}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;