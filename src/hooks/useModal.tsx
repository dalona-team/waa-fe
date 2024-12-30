import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import ReactDOM from 'react-dom';

interface ModalContextType {
  // eslint-disable-next-line no-unused-vars
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const showModal = useCallback((content: ReactNode) => {
    setModalContent(content);
  },[]);

  const hideModal = useCallback(() => {
    setModalContent(null);
  },[]);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalContent && ReactDOM.createPortal(
        <div className="modal">
          {modalContent}
        </div>,
        document.getElementById('modal-standard') as HTMLElement
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};