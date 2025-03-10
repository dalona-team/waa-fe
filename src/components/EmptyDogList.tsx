import PlusIcon from '@/icons/plus.svg';


interface EmptyDogListProps {
  onAddDog: () => void;
}

export default function EmptyDogList({ onAddDog }: EmptyDogListProps) {
  return (
    <div className="flex flex-col">
      <div 
        className="w-[282px] h-[284px] bg-white-1000 p-2 rounded-2xl flex gap-2.5 flex-col items-center justify-center cursor-pointer"
        onClick={onAddDog}
      >
        <div className="w-full h-full rounded-xl flex items-center justify-center text-blue-500 mb-2 bg-blue-50 hover:bg-blue-100 transition-colors">
          <PlusIcon width={36} height={36} />
        </div>
        <span className="text-gray-800 typography-title2-regular pb-2.5">애기 정보 추가하기</span>
      </div>
    </div>
  );
}