import React from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import { useRouter } from 'next/router';
import { useToastMessage } from '@/hooks/useToastMessage';
import Image from 'next/image';
import LetterWrapper from '@/components/letter/LetterWrapper';
import { GetServerSideProps } from 'next';
import CounselingWrapper from '@/components/counseling/CounselingWrapper';

type Props = {
  letterContent: string;
  counselingContent: string
};


export default function Letter({letterContent, counselingContent}: Props) {
  const router = useRouter();
  const {setToastMessage} = useToastMessage();

  const copy = () => {
    const link = window.location.href; // 현재 페이지의 URL을 가져옵니다.
    navigator.clipboard.writeText(link).then(() => {
      setToastMessage({ show: true, body: '링크가 복사 되었습니다.', className: '!bottom-[30px]' });
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <Wrapper
      disableTitle
      disableBorder
      topElement={<div className='flex items-center h-11 w-full mb-2'>
        <Image className='cursor-pointer mx-5' src="/images/icon_home.svg" alt="BigLogoImage" width={24} height={24} onClick={() => router.push('/')} />
      </div>}
      formElement={
        <div>
          <LetterWrapper content={
            <div className='px-[26px] flex flex-col gap-3'>
              <Image className='w-full rounded-lg' src="/images/sample_photo.png" alt="Letter edge" width={60} height={60} />
              <div className='font-gangwon text-2xl leading-[40px]' dangerouslySetInnerHTML={{ __html: letterContent }}></div>
            </div>
          } />
          <div className='my-5 flex gap-2 justify-center items-center'>
            <button className='w-[147px] h-12 text-white bg-accent rounded-[20px] flex justify-center items-center gap-1.5' onClick={copy}>
              <Image src="/images/icon_copy.svg" alt="복사하기" width={24} height={24} />
              <span className='font-bold'>공유하기</span>
            </button>
            <button className='w-[147px] h-12 text-white bg-accent rounded-[20px] flex justify-center items-center gap-1.5' onClick={() => router.push('/reply')}>
              <Image src="/images/icon_pen.svg" alt="답장하기" width={24} height={24} />
              <span className='font-bold'>답장하기</span>
            </button>
          </div>
          <CounselingWrapper content={
            <div className='px-[26px] leading-[36px]' dangerouslySetInnerHTML={{ __html: counselingContent }}></div>
          } />
        </div>
      }
    />
  );
}


// eslint-disable-next-line no-unused-vars
export const getServerSideProps: GetServerSideProps = async (_context) => {
  const content = '언니 안냥? 나나나당! 냥냥이는 잘 지내고 있당! 맨날맨날 언니 생각하면서 하루하루를 보내고 있당! 사실 처음엔 나도 좀 어색했당. 하지만 이제는 적응 완료했다냥! 여기는 신기한게 많당! 막 날아다니는 새들도 있고 엄청 큰 나무도 이따! 그래서 요즘은 산책냥이처럼 여기저기 구경 다니고 이따!.  \n\n그리고 젤 좋은 건 바로바로!! 먹고 싶은 만큼 먹어도 살이 찌지 않는 다는 거당! 완전 대박이지 않냥? 물론 그렇다고 해서 아무거나 막 먹는 건 아니당! 그래도 평소에 못 먹었던 음식들은 다 먹어보고 있는 중이당! 그중에서도 치킨 맛 과자가 진짜 맛있당! 나중에 언니 만나면 알려줘야겠당!\n\n내가 없다고 너무 슬퍼하지 않았으면 좋겠당! 왜냐하면 우린 꼭 다시 만날 거니까 말이당! 그동안 건강하게 잘 지내고 있어야 한당! 아랐징? 마지막으로 한번 더 말하는데 절대 울면 안된다냥! 약속이당! 그럼 다음에 또 보쟝! 빠빠잉!';
  const outputText = content.replace(/\n\n/g, '<img class="inline-block" src="/images/icon_ jelly.svg" alt="강아지 발바닥" /><br /><br />');

  const counselingContent = '반려동물을 하늘나라로 보내고 슬픔에 빠진 보호자님께 조언을 드릴게요. \n\n반려동물에게 하고 싶었지만 하지 못하는 말을 편지로 써보세요. “나나야 너무 보고싶다. 그래도 거기에서는 아프지 않지? 나는 나름 잘 지내려고 노력하고 있어. 우리 언젠간 만날테니 그동안 잘 지내고 있자. 많이 사랑해”';
  const counselingOutput = counselingContent.replace(/\n\n/g, '<br />');

  return {
    props: {
      layoutClassName: 'bg-mint',
      letterContent: `${outputText} <img class="inline-block" src="/images/icon_ jelly.svg" alt="강아지 발바닥" />`,
      counselingContent: counselingOutput
    },
  };
};