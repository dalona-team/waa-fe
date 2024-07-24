import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomeDay = () => {
  const cardList = [{
    title: '로나가 엄마에게',
    message: '엄마아빠 안녕 나는 메로나야 그동안 잘 지냈어? 나 없이 ㅇㅁㄹㅁㅇㄴㄹㅇㄹ지내는 동안 심심하진 않았어? 걱정돼서 내 생각만 했지? 근데 있잖아 난 지금 너',
    imageSrc: '/images/day_animals/illust_04.svg',
    imageWidth: 70,
    imageHeight: 50
  },{
    title: '로나가 엄마에게',
    message: '엄마아빠 안녕 나는 메로나야 그동안 잘 지냈어? 나 없이 ㅇㅁㄴㄹㅁㅇㄴㄹㅇㅁㄴㄹ지내는 동안 심심하진 않았어? 걱정돼서 내 생각만 했지? 근데 있잖아 난 지금 너',
    imageSrc: '/images/day_animals/illust_06.svg',
    imageWidth: 80,
    imageHeight: 50
  },{
    title: '로나가 엄마에게',
    message: '엄마아빠 안녕 나는 메로나야 그동안 잘 지냈어? 나 없이 지내는 동ㅇㅇㅇ ㅇㄹㄴㅇㄹㄴㅇ ㄹㅇ안 심심하진 않았어? 걱정돼서 내 생각만 했지? 근데 있잖아 난 지금 너',
    imageSrc: '/images/day_animals/illust_05.svg',
    imageWidth: 80,
    imageHeight: 50
  },{
    title: '로나가 엄마에게',
    message: '엄마아빠 안녕 나는 메로나야 그동안 잘 지냈어? 나 없이 지내는 동안 심심하진 dsfdsfsdfsdf fhgfdg않았어? 걱정돼서 내 생각만 했지? 근데 있잖아 난 지금 너'
  }];

  return (
    <div className='relative flex flex-col items-center justify-center h-full'>
      <Image className='absolute top-[15%] left-[15%]' src="/images/day_animals/illust_01.svg" alt="강아지들" width={60} height={80} />
      <Image className='absolute top-[20%] right-0' src="/images/day_animals/illust_02.svg" alt="강아지들" width={74} height={70} />
      <Image className='absolute top-[40%] left-[40%]' src="/images/day_animals/illust_03.svg" alt="강아지들" width={80} height={60} />
      <Image className='mt-[130px]' src="/images/logo_big_white.svg" alt="BigLogoImage" width={90} height={74} />
      <p className='text-white text-center text-xs pt-1'>떠나간 반려동물에게<br />편지를 받아보세요!</p>
      <Swiper
        freeMode={true}
        spaceBetween={6}
        slidesPerView='auto'
        className='w-full !pt-[196px] !pl-[20px]'
      >
        {cardList.map((card, index) => (
          <SwiperSlide key={index} style={{width: 'auto', userSelect: 'none'}}>
            <div className='relative w-40 h-[184px] font-gangwon leading-tight pl-5 pr-5 pt-2.5 pb-4 bg-white rounded-xl flex flex-col justify-center text-lg font-normal text-left'>
              {card.imageSrc ? <div className='absolute left-0 w-full flex justify-center' style={{bottom: '96%'}}><Image src={card.imageSrc} alt="강아지" width={card.imageWidth} height={card.imageHeight} /></div> : null}
              <div className='text-black/40 pb-1 truncate'>{card.title}</div>
              <div className='text-black/80 text-ellipsis overflow-hidden line-clamp-6'>{card.message}</div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide style={{width: 'auto', userSelect: 'none'}}>
          <Image className='my-10' src="/images/day_animals/illust_07.svg" alt="강아지들" width={200} height={100} style={{marginLeft: '-6px'}} />
        </SwiperSlide>
      </Swiper>
      <div className='mt-4 mb-8'>
        <button role='button' className='h-[52px] px-7 py-3 bg-primary rounded-[20px] shadow flex justify-center items-center'>
          <span className='text-center text-white text-sm font-bold'>내새꾸에게 편지 신청</span>
        </button>
      </div>
      <div className="opacity-50 text-center text-white text-xs">Copyright by ⓒ 젤리레터. All rights reserved.</div>
    </div>
  );
};

export default HomeDay;