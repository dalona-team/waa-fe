import { useState } from 'react';

export const useForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return {
    step,
    nextStep,
    prevStep,
  };
};