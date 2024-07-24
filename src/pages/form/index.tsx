import { useForm } from './hooks/useForm';
import Step1 from './step1';
import Step2 from './step2';

export default function Letter() {
  const {step} = useForm();

  return (
    <div>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
    </div>
  );
}
