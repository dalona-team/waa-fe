export const DogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
      <div className="relative h-48 bg-gray-200" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-12 bg-gray-200 rounded" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-8 w-20 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};