import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FormData {
  name: string;
  species: 'CAT' | 'DOG';
  ownerNickname: string;
  extraDesc?: string;
  extraInfo?: string;
}

interface FormContextType {
  formData: FormData;
  // eslint-disable-next-line no-unused-vars
  setFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>({
    name: '',
    species: 'CAT',
    ownerNickname: '',
    extraDesc: '',
    extraInfo: '',
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};