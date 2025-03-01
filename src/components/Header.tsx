import Image from 'next/image';
import Link from 'next/link';
import UploadModal from './UploadModal';
import { useState } from 'react';
import LoadingModal from './LoadingModal';

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // 3초 딜레이
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
      setIsModalOpen(true);
    } catch (error) {
      setIsLoading(false);
      // 에러 처리
    }
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[74px] bg-white border-b border-gray-100 z-50">
        <div className="flex items-center justify-between h-full px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/waa-logo.svg" 
              alt="WAA Logo"
              width={130}
              height={48}
              priority
            />
          </Link>
          <button 
            onClick={handleSubmit}
            className="px-14 py-2.5 bg-primary-1000 hover:bg-primary-700 rounded-xl typography-title3-bold"
          >
            <span className="typography-title2-bold text-white-1000">만들기</span>
          </button>
        </div>
      </header>
      <LoadingModal isOpen={isLoading} />
      <UploadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
