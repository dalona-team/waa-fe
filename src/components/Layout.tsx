import React from 'react';

const Layout = ({ children, className }: { children: React.ReactNode, className?: string }) => {

  return (
    <div
      className="container"
    >
      <div id='modal-standard' className={`wrapper relative overflow-hidden ${className ?? ''}`}>{children}</div>
    </div>
  );
};

export default Layout;