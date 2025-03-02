import { useState } from 'react';
import DogCard from './DogCard';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { dogs } from '@/mocks/dogs';


export interface Dog {
  id: string;
  name: string;
  age: string;
  imageUrl: string;
  dDay: string;
  status: 'WAITING' | 'PROTECTION' | 'COMPLETED';
}

export interface DogSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (dog: Dog) => void;
}

export default function DogSelectModal({ isOpen, onClose, onSelect }: DogSelectModalProps) {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  const handleSelect = () => {
    if (selectedDog) {
      onSelect(selectedDog);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-24 bg-white-1000 rounded-2xl overflow-hidden max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between p-4">
          <button onClick={onClose}>
            <ArrowBackIcon />
          </button>
          <h2 className="typography-title2-regular">강아지 선택</h2>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-[calc(100%-140px)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dogs.map(dog => (
              <DogCard
                key={dog.id}
                {...dog}
                selected={selectedDog?.id === dog.id}
                onClick={() => setSelectedDog(dog)}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white flex justify-end">
          <button
            onClick={handleSelect}
            disabled={!selectedDog}
            className="w-[270px] py-3 bg-primary-1000 hover:bg-primary-800 disabled:bg-gray-200 
              text-white-1000 disabled:text-gray-400 rounded-xl typography-title3-bold"
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
} 