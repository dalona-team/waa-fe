import { Dog } from '@/types/dog';

interface DogDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  dog: Dog;
}

export default function DogDetailModal({ isOpen, onClose, dog }: DogDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* 배경 오버레이 */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* 모달 컨텐츠 */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl max-w-2xl w-full mx-auto overflow-hidden">
          {/* 닫기 버튼 */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row">
            {/* 이미지 슬라이더 */}
            <div className="relative w-full md:w-1/2 aspect-square">
              {/* <img 
                src={dog.imageUrl || '/placeholder-dog.jpg'} 
                alt={dog.name} 
                className="w-full h-full object-cover"
              /> */}
              {/* 슬라이더 네비게이션 */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {[1,2,3,4,5,6,7,8].map((_, index) => (
                  <button 
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>

            {/* 상세 정보 */}
            <div className="p-6 w-full md:w-1/2">
              <div className="mb-4">
                <div className="text-gray-500 text-sm">등록일: {dog.createdAt}</div>
                <h2 className="text-2xl font-bold mt-1">{dog.name} {dog.birthDate}세</h2>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mt-2">
                  임시 보호
                </div>
              </div>

              {/* 기본 정보 테이블 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">몸무게</span>
                  <span>{dog.weight}kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">구조 날짜</span>
                  <span>{dog.rescueDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">사상충 여부</span>
                  <span>{dog.heartworm ? '있음' : '없음'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">중성화 여부</span>
                  <span>{dog.neutered ? '완료' : '미완료'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">켄넬 여부</span>
                  <span>{dog.kennelCough ? '있음' : '없음'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">스케일링 여부</span>
                  <span>{dog.dentalScaling ? '있음' : '없음'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">공고 횟수</span>
                  <span>7번</span>
                </div>
              </div>

              {/* 강아지 상세 정보 */}
              <div className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-600 mb-2">강아지 상세 정보</h3>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">자주 짖어요</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">사람을 좋아해요</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">산책을 배변을 해요</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Q&A 섹션 */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-gray-600 mb-2">Q. 어떻게 구조 되었나요?</h4>
                  <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                    개농장에서 구출했고, WWA에서 대리봄
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-600 mb-2">Q. 강아지한테 특별한 사연이 있나요?</h4>
                  <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                    파양당했었다고 들었음
                  </p>
                </div>
              </div>

              {/* 버튼 */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  수정하기
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  글쓰기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}