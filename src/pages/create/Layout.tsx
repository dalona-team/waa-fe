import Header from '@/components/Header';

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px] w-full h-ful">
        {children}
      </main>
    </div>
  );
}
