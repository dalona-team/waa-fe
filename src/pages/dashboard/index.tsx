import { useEffect, useState } from 'react';
import { getDogs } from '@/features/getDogs';
import { Dog } from '@/types/dog';
import CustomChip from '@/components/customChip/CustomChip';
import DogCard from '@/components/DogCard';
import { DogCardSkeleton } from '@/components/DogCardSkeleton';
import DogDetailModal from '@/components/DogDetailModal';
import EmptyDogList from '@/components/EmptyDogList';
import DogRegistrationModal from '@/components/DogRegistrationModal';

const FILTER_OPTIONS = [
  { id: 'all', label: '전체' },
  { id: 'overseas', label: '해외 입양' },
  { id: 'inProgress', label: '입양 중' },
  { id: 'temporary', label: '임시보호' }
];

export default function Dashboard() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      setLoading(true);
      try {
        const result = await getDogs(1); // organizationId는 실제 값으로 변경 필요
        if (result.success && result.data) {
          setDogs(result.data.dogs);
        }
      } catch (error) {
        console.error('강아지 목록 조회 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);


  const handleAddDog = () => {
    setIsRegistrationModalOpen(true);
  };

  return (
    <div className="p-6">
      {/* 헤더 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">
          총 {dogs.length}개의 애기들 정보가 등록되어 있어요!
        </h1>
        
        {/* 필터 칩 */}
        <div className="flex gap-2">
          {FILTER_OPTIONS.map((option) => (
            <CustomChip
              key={option.id}
              label={option.label}
              selected={activeFilter === option.id}
              onClick={() => setActiveFilter(option.id)}
            />
          ))}
        </div>
      </div>

      {/* 컨텐츠 */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <DogCardSkeleton key={index} />
          ))}
        </div>
      ) : dogs.length === 0 ? (
        <EmptyDogList onAddDog={handleAddDog} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dogs.map((dog) => (
            <DogCard
              key={dog.id}
              id={String(dog.id)}
              name={dog.name}
              age={dog.birthDate}
              imageUrl={''}
              dDay={dog.rescueDate}
              status={dog.status}
            />
          ))}
        </div>
      )}

      {selectedDog && (
        <DogDetailModal
          isOpen={!!selectedDog}
          onClose={() => setSelectedDog(null)}
          dog={selectedDog}
        />
      )}

      {isRegistrationModalOpen && (
        <DogRegistrationModal
          isOpen={isRegistrationModalOpen}
          onClose={() => setIsRegistrationModalOpen(false)}
        />
      )}
    </div>
  );
}