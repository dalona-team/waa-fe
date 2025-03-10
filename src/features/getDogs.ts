import { dogAPI } from '@/api/dog.api';

export const getDogs = async (organizationId: number) => {
  try {
    const result = await dogAPI.getDogs(organizationId);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: '강아지 목록 조회에 실패했습니다.',
    };
  }
};