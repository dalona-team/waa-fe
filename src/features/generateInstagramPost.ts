import { postAPI } from '@/api/post.api';
import { CreatePostContentsRequest } from '@/types/post';

export const generateInstagramPost = async (postData: CreatePostContentsRequest) => {
  try {
    const result = await postAPI.createPostContents(postData);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: 'AI 인스타그램 콘텐츠 생성에 실패했습니다.',
    };
  }
};