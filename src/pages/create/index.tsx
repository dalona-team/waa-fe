import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import React from 'react';

export default function CreatePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // 또는 실제 이미지 배열의 길이

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div className={`w-1.5 h-1.5 rounded-full ${
        i === currentSlide ? 'bg-primary-1000' : 'bg-gray-200'
      }`} />
    ),
    dotsClass: 'slick-dots custom-dots flex justify-center gap-1',
    appendDots: (dots: any) => (
      <div style={{ position: 'absolute', bottom: '-45px' }}>
        <ul style={{ margin: 0, padding: 0 }}>{React.Children.map(dots, child => 
          React.cloneElement(child, {
            style: { ...child.props.style, width: 'auto', margin: '0 3px' }
          })
        )}</ul>
      </div>
    )
  };

  return (
    <div className="w-full h-full min-h-screen flex">
      <div className="flex-1">
        <div className="px-6 py-8">
          <span className="typography-title2 text-gray-500">Edit</span>
          <h1 className="typography-title1-bold text-gray-900 mt-2 mb-6">
            수정할 부분이 있으면 수정해 주세요!
          </h1>
          {/* 게시 이미지 섹션 */}
          <div className="mb-8 bg-white-1000 rounded-xl p-5">
            <h2 className="typography-title2-bold text-gray-800 mb-4">게시 이미지</h2>
            <div className="flex flex-wrap gap-2">
              {/* 이미지 업로드 영역 - 실제 구현 시 이미지 업로드 로직 필요 */}
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="aspect-square w-[118px] bg-gray-100 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* 게시글 섹션 */}
          <div className="bg-white-1000 rounded-xl p-5">
            <h2 className="typography-title2-bold text-gray-800 mb-4">게시글</h2>
            <textarea 
              className="w-full min-h-[300px] p-4 outline-none border-0 bg-gray-50 rounded-lg typography-title3-regular"
              placeholder="게시글 내용을 입력하세요"
            />
          </div>
        </div>
      </div>

      {/* 오른쪽 미리보기 섹션 */}
      <div className="bg-primary-1000 min-w-[600px] flex items-center justify-center">
        <div
          className="bg-white-1000 w-[406px] h-[860px] rounded-[48px] p-2"
          style={{
            background: 'rgba(214, 220, 255, 0.96)'
          }}
        >
          <div className="flex flex-col w-full h-full pb-6 bg-white-1000 rounded-[40px]">
            <div className="flex-1">
              {/* 상단 헤더 */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <span className="typography-body-semibold">Ruffles</span>
                </div>
                <MoreHorizIcon className="text-gray-600" />
              </div>

              {/* 이미지 슬라이더 표시 영역 */}
              <div className="aspect-square relative">
                <Slider {...settings}>
                  {Array(totalSlides).fill(0).map((_, i) => (
                    <div key={i} className="aspect-square">
                      <div className="w-full h-full bg-gray-100" />
                    </div>
                  ))}
                </Slider>
                <div className="absolute top-2 right-2 typography-body-regular bg-black bg-opacity-50 text-white-1000 px-2 py-1 rounded">
                  {currentSlide + 1}/{totalSlides}
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <FavoriteBorderIcon />
                    <ChatBubbleOutlineIcon />
                    <SendIcon />
                  </div>
                  <BookmarkBorderIcon />
                </div>
              </div>
              <div className="p-3 font-bold">Username</div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="px-3">
                따뜻한 가족을 기다리는 다로나를 소개합니다.
                <br /><br />
                2020년생 추정
                <br />
                남아
                <br />
                중성화 완료
                <br />
                9kg
                <br />
                캔넬 없음
                <br />
                현재 임시보호중
                <br /><br />
                우리 다로나의 특별한 매력😀
                로나는 사람을 좋아하고 실내 배변을 잘 하는 귀여운 친구에요! 다만 자주 짖는 편인데 차차 좋아지고 있어요!
                <br /><br />
                우리 다로나의 사연
                우리 로나는 2021년 8월 9일에 진해군에서 발견했어요! 개농장에서 구출썌어요.! 강아지 칩을 보니 이전에 같이 살던 가족이 있었는데 우리 다로나를 파양했었나봐요 
                <br /><br />
                사람을 좋아하고 애교도 많은 우리 다로나는 이미 많은 사랑을 받을 준비가 되어 잇어요. 이제 다로나에게 따뜻한 평생 가족이 되어주세요
                <br />
                공유와 리그램으로 다로나에게 응원의 손길을 보내주세요
              </div>
              <br />
              <p className="px-3 text-[#1FA1FF]">
                #유기견 입양 #믹스견입양 #유기견 #입양해주세요 #입양은 사랑입니다 #사지말고입양하세요 #가족을 사지마세요 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
