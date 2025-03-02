/* eslint-disable @next/next/no-img-element */
interface DogCardProps {
  id: string;
  name: string;
  age: string;
  imageUrl: string;
  dDay: string;
  status: 'WAITING' | 'PROTECTION' | 'COMPLETED';
  selected?: boolean;
  onClick?: () => void;
}

export default function DogCard({
  id,
  name,
  age,
  imageUrl,
  dDay,
  status,
  selected,
  onClick
}: DogCardProps) {
  const getStatusText = (status: string) => {
    switch (status) {
    case 'WAITING': return '임양 대기';
    case 'PROTECTION': return '임시 보호';
    case 'COMPLETED': return '입양 완료';
    default: return '';
    }
  };

  const getStatusStyleClass = (status: string) => {
    switch (status) {
    case 'WAITING': return ' bg-gray-100 text-gray-800';
    case 'PROTECTION': return ' bg-primary-100 text-primary-900';
    case 'COMPLETED': return ' bg-primary-900 text-white-1000';
    default: return '';
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all shadow-md
        ${selected ? 'ring-4 ring-primary-600' : 'hover:ring-2 hover:ring-gray-200'}`}
    >
      <div className="aspect-square">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover user-select-none" />
      </div>
      <div className="opacity-[0.6] absolute top-2 left-2 px-2 py-1 bg-red-500 rounded text-white-1000 typography-caption">
        D+{dDay}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <span className="typography-title3-bold">{name}</span>
            <span className="typography-body-regular text-gray-500 ml-1">{age}</span>
          </div>
          <span className={'typography-caption font-bold text-title3-bold inline-block px-4 py-1 rounded-full' + getStatusStyleClass(status)}>
            {getStatusText(status)}
          </span>
        </div>
        <div className="typography-caption text-gray-500">ID: {id}</div>
      </div>
    </div>
  );
}