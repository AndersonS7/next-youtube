import Header from '@/components/header';
import MainContent from '@/components/maincontent';
import LeftNav from '@/components/navleft';

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex gap-4 h-screen w-full mt-2 pr-4'>
        <LeftNav />
        <MainContent />
      </div>
    </>
  );
}
