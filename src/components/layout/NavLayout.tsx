import NavigationBar from '../NavigationBar';

export default function NavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavigationBar />
      <main className="flex-1 pt-[72px] pl-[182px] w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(73, 100, 255, 0.01) 0%, rgba(73, 100, 255, 0.16) 100%), #FFF;' }}>
        {children}
      </main>
    </div>
  );
}
