import { useState } from 'react';

interface DogRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DogRegistrationModal({ isOpen, onClose }: DogRegistrationModalProps) {
  const [step, setStep] = useState(1); // 1: 기본 정보, 2: 건강 정보, 3: 기타

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white-1000 rounded-2xl w-full max-w-xl mx-auto h-[90vh] flex flex-col">
          {/* 헤더 */}
          <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold">강아지 정보 등록</h2>
            <button onClick={onClose} className="text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 진행 상태 표시 */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1 h-1 bg-gray-200 rounded">
                <div className={`h-full bg-blue-500 rounded ${
                  step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'
                }`} />
              </div>
            </div>
          </div>

          {/* 폼 내용 */}
          <div className="px-6 pb-6 flex-1 overflow-y-auto scrollbar-hide">
            {/* 기본 정보 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  강아지 이름*
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="예) 메리"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    나이*
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="2024년 6월 19일"
                    />
                    <input type="checkbox" /> 추정
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    몸무게*
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="kg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  구조 일시*
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="rescue" className="mr-2" /> 모름
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="rescue" className="mr-2" checked /> 날짜
                  </label>
                </div>
                <input
                  type="text"
                  className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2024년 6월 19일"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  중성화 여부*
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="neutered" className="mr-2" checked /> 예
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="neutered" className="mr-2" /> 아니오
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="neutered" className="mr-2" /> 모름
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  임보/입양 상태 (현재 상태)*
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    '임보 전', '임보 중',
                    '임보 신청 중', '해외이동봉사 모집중',
                    '임보 완료', '입양 신청 중',
                    '입양 중', '입양 완료'
                  ].map((status) => (
                    <label key={status} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {status}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  사진 업로드*
                </label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <button className="px-4 py-2 bg-blue-50 text-blue-500 rounded-lg">
                    PC 파일 찾기
                  </button>
                </div>
              </div>

              {/* 건강 상태 */}
              <div className="space-y-4 mt-8">
                {['사상충 감염 여부', '중성화 여부', '켄넬코프 여부', '이빨 스케일링 여부'].map((item) => (
                  <div key={item}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {item}
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name={item} className="mr-2" checked /> 예
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name={item} className="mr-2" /> 아니오
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name={item} className="mr-2" /> 모름
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              {/* 성향 정보 */}
              <div className="space-y-4 mt-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    기타 건강 관련 특이사항
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="특이사항이 있다면 입력해주세요."
                  />
                </div>

                {['짖음', '분리불안', '배변'].map((category) => (
                  <div key={category}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {category}
                    </label>
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map((num) => (
                        <button
                          key={num}
                          className={`w-10 h-10 rounded-full border ${
                            num === 5 ? 'bg-blue-500 text-white' : 'text-gray-500'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 기타 정보 */}
              <div className="space-y-4 mt-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    어떻게 구조되었나요?
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="구조 경위를 입력해주세요."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    강아지한테 특별한 사연이 있나요?
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="특별한 사연이 있다면 입력해주세요."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}