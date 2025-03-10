import Header from '@/components/Header';

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px] w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(73, 100, 255, 0.01) 0%, rgba(73, 100, 255, 0.16) 100%), #FFF;' }}>
        {children}
      </main>
    </div>
  );
}
