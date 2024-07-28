import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRouter } from 'next/router';

const cardList = [{
  title: '사랑하는 엄마에게',
  message: '엄마 안녕! 나 키키야! 엄마가 나 많이 보고 싶다고 하던데 그거 알아 ㅎㅎ 나도 엄마가 너무 보고싶어 ㅠㅠ 근데 있잖아 엄마 나 지금 되게되게 행복하게 잘 지내고 있어! 아픈 곳도 하나도 없고 완전 멀쩡하다구?!',
  imageSrc: '/images/day_animals/illust_04.svg',
  imageWidth: 70,
  imageHeight: 50
},{
  title: '집사야 안녕!',
  message: '나는 마일로야 잘 지내고 이써? 내가 고양이 별로 떠난 다음에 집사가 마니마니 슬퍼했다고 드러써 내가 길냥이때 마니 아팟자나 그때 집사가 나 구해조서',
  imageSrc: '/images/day_animals/illust_06.svg',
  imageWidth: 80,
  imageHeight: 50
},{
  title: '사랑하는 누나에게',
  message: '누나 안녕! 나 먼지야! 누나가 나 많이 보고 싶다고 하던데 그 마음 다 알아 나도 너무너무 보고싶다 누나... 주말에 누나랑 늦잠 자던 게 엊그제 같은데 이젠 그럴 수 없다는 게 너무 슬프다 그치..',
  imageSrc: '/images/day_animals/illust_05.svg',
  imageWidth: 80,
  imageHeight: 50
},{
  title: '엄마 안녕! 나 초코야!',
  message: '엄마 잘 지내고 이찌~? 나 많이 보고 싶어한다고 들었눈데. 나도 엄마가 엄청 보고 시포 특히 엄마랑 바다에 놀러가서 바다 냄새 잔뜩 맡고 수영하던 거 그게 너무 그립고 가끔씩 생각나. 그때 파도 소리 들으면서 뛰놀던 게 참 좋았는데 그치'
}];


const HomeNight = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-y-auto invisible-scroll">
      <div className="flex-1 flex flex-col justify-center items-center">
        <Image
          priority
          className="absolute top-[12%] left-[15%]"
          src="/images/night_animals/illust_01_dark.svg"
          alt="강아지들"
          width={60}
          height={80}
        />
        <Image
          priority
          className="absolute top-[22%] right-[9%]"
          src="/images/night_animals/illust_02_dark.svg"
          alt="강아지들"
          width={74}
          height={70}
        />
        <Image
          priority
          className="slideLeft absolute top-[40%] left-[40%]"
          src="/images/night_animals/illust_03_dark.svg"
          alt="강아지들"
          width={80}
          height={60}
        />
        <div className="flex flex-col items-center relative top-[15px]">
          <Image
            priority
            src="/images/logo_big_white.svg"
            alt="BigLogoImage"
            width={90}
            height={74}
          />
          <p className="text-white text-center text-xs pt-1">
            떠나간 반려동물에게
            <br />
            편지를 받아보세요!
          </p>
        </div>
      </div>
      <div className="flex-1 w-full overflow-hidden flex flex-col items-center gap-4">
        <Swiper
          freeMode={true}
          spaceBetween={6}
          slidesPerView="auto"
          className="w-full !pl-[20px] !pt-[45px] min-h-[230px]"
        >
          {cardList.map((card, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "auto", userSelect: "none" }}
            >
              <div className="relative w-40 h-[184px] font-gangwon leading-tight pl-5 pr-5 pt-2.5 pb-4 bg-white rounded-xl flex flex-col justify-center text-lg font-normal text-left">
                {card.imageSrc ? (
                  <div
                    className="absolute left-0 w-full flex justify-center"
                    style={{ bottom: "96%" }}
                  >
                    <Image
                      src={card.imageSrc}
                      alt="강아지"
                      width={card.imageWidth}
                      height={card.imageHeight}
                    />
                  </div>
                ) : null}
                <div className="text-black/40 pb-1 truncate font-gangwon">
                  {card.title}
                </div>
                <div className="text-black/80 text-ellipsis overflow-hidden line-clamp-6 font-gangwon">
                  {card.message}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide style={{ width: "auto", userSelect: "none" }}>
            <Image
              priority
              className="my-10"
              src="/images/night_animals/illust_07_dark.svg"
              alt="강아지들"
              width={200}
              height={100}
              style={{ marginLeft: "-6px" }}
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex-1 flex flex-col justify-between">
          <button
            role="button"
            className="h-[52px] px-7 py-3 bg-primary rounded-[20px] shadow flex justify-center items-center"
            onClick={() => router.push("/form/step1")}
          >
            <span className="text-center text-white text-sm font-bold">
              내새꾸에게 편지 신청
            </span>
          </button>
          <div className="opacity-50 text-center text-white text-xs mb-4">
            Copyright by ⓒ 젤리레터. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNight;