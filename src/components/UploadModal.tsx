import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Dim background */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="bg-white-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-[400px] p-6">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col items-center">
          <Image 
            src="/images/upload-illustration.png"
            alt="Upload illustration"
            width={240}
            height={240}
          />
          <h2 className="typography-title2-bold text-gray-900 mt-4 mb-6">
            업로드 완료!
          </h2>
          <button
            onClick={onClose}
            className="w-[70%] py-3 bg-primary-1000 hover:bg-primary-900 text-white-1000 rounded-xl typography-title3-bold mt-4"
          >
            업로드된 게시물 보러가기
          </button>
        </div>
      </div>
    </div>
  );
} 