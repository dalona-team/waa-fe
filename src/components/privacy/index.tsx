/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { useModal } from '@/hooks/useModal';

export default function Privacy() {
  const {hideModal} = useModal();

  return (
    <Wrapper
      className='bg-mint'
      isFloatingButton
      titleElement={<div className='text-center'>서비스 이용약관</div>}
      formElement={
        <div className='text-sm'>
          '젤리레터' 서비스의 안정적인 제공 및 운영을 위하여 다음과 같이 개인정보를 수집 및 이용합니다.<br></br>
          <br></br>1. 수집 목적 : 서비스 운영
          <br></br><br></br>2. 수집 항목 : (필수) 반려동물 종, 반려동물 이름, 반려동물의 보호자를 부르는 명칭, (선택) 반려동물 특성, 반려동물 사진, 반려동물 성격
          <br></br><br></br>3. 보유 기간 : <b className='font-bold'>처리목적 달성 또는 회원 탈퇴일로부터 15일(단, 부정 가입 방지를 위해 수집한 정보들은 1년 간 보관하며, 법령에 특별한 규정이 있는 경우 관련 법령에 따라 보관)</b>
          <br></br><br></br><br></br>
          ※ 서비스 제공 과정에서 약관 및 개인정보 처리 등에 관한 동의 이력, 서비스 이용 기록 및 디바이스 정보, 채팅 기록, 쿠키가 생성 · 수집될 수 있습니다.
          귀하는 개인정보 수집에 동의하지 않을 권리가 있습니다.<br></br>다만 서비스 제공에 필요한 최소한의 개인정보이므로, 동의해주셔야 서비스 이용이 가능합니다.
        </div>
      }
      buttonElement={
        <div className='flex gap-1.5'>
          <button className='w-full h-14 text-white bg-primary rounded-[20px]' onClick={hideModal}><span>닫기</span></button>
        </div>
      }
    />
  );
}