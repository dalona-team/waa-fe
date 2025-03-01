interface LoadingModalProps {
  isOpen: boolean;
}

export default function LoadingModal({ isOpen }: LoadingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
        <p className="typography-title2-bold text-white-1000 mt-4">게시중...</p>
      </div>
    </div>
  );
} 