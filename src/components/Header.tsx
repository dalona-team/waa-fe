import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
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
        <Link 
          href="/create"
          className="px-14 py-2.5 bg-primary-1000 hover:bg-primary-700 rounded-xl typography-title3-bold"
        >
          <span className="typography-title2-bold text-white-1000">만들기</span>
        </Link>
      </div>
    </header>
  );
}
