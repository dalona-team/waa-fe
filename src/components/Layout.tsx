import React from 'react';
import NavigationBar from './NavigationBar';

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div
      className="container invisible-scroll"
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