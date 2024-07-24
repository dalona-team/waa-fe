import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className='wrapper'>{children}</div>
    </div>
  );
};

export default Layout;