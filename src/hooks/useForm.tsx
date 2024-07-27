import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

interface FormData {
  name: string;
  species: 'CAT' | 'DOG' | null;
  ownerNickname?: string;
  specialOwnerNickname?: string;
  character?: string[];
  toyAndTreat?: string;
  memory?: string;
}

interface FormContextType {
  formData: FormData;
  // eslint-disable-next-line no-unused-vars
  setFormData: (data: Partial<FormData>) => void;
  resetFormData: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>({
    name: '',
    species: null,
    ownerNickname: '',
    specialOwnerNickname: '',
    character: [],
    toyAndTreat: '',
    memory: '',
  });

  const setFormData = useCallback((data: Partial<FormData>) => {
    setFormDataState((prev) => {
      const newFormData = { ...prev, ...data };
      localStorage.setItem('formData', JSON.stringify(newFormData));
      return newFormData;
    });
  }, []);

  const resetFormData = useCallback(() => {
    localStorage.removeItem('formData');
    localStorage.removeItem('previewImage');
    setFormDataState({
      name: '',
      species: null,
      ownerNickname: '',
      specialOwnerNickname: '',
      character: [],
      toyAndTreat: '',
      memory: '',
    });
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem('formData');
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setFormDataState({
        name: parsedData.name,
        species: parsedData.species,
        specialOwnerNickname: parsedData.specialOwnerNickname,
        ownerNickname: parsedData.specialOwnerNickname ? 'special' : parsedData.ownerNickname,
        character: parsedData.character ?? [],
        toyAndTreat: parsedData.toyAndTreat,
        memory: parsedData.memory,
      });
    }
  }, []);

  return (
    <FormContext.Provider value={{ formData, setFormData, resetFormData }}>
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