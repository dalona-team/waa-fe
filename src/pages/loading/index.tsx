import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex justify-center items-center flex-col gap-2 h-full">
      <Image className='floating pb-7' src="/images/img_loading.svg" alt="로딩 이미지" width={90} height={60} />
      <div className="text-center text-black/95 text-lg font-bold">별나라에서<br/>내새꾸를 찾는 중이에요</div>
      <div className="text-center text-black/40 text-sm font-bold">강아지어를 한국어로 번역하기 때문에<br/> 오류가 발생할 수 있습니다!</div>
    </div>
  );
}
