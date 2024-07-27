import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ToastMessage {
  show: boolean;
  body: string;
  className?: string
}

interface ToastMessageContextType {
  toastMessage: ToastMessage;
  // eslint-disable-next-line no-unused-vars
  setToastMessage: (data: ToastMessage) => void;
}

const ToastMessageContext = createContext<ToastMessageContextType | undefined>(undefined);

export const ToastMessageProvider = ({ children }: { children: ReactNode }) => {
  const [toastMessage, setToastMessage] = useState<ToastMessage>({
    show: false,
    body: '',
    className: '',
  });

  return (
    <ToastMessageContext.Provider value={{ toastMessage, setToastMessage }}>
      {children}
    </ToastMessageContext.Provider>
  );
};

export const useToastMessage = () => {
  const context = useContext(ToastMessageContext);
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a ToastMessageProvider');
  }
  return context;
};