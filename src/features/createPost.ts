import { postAPI } from '@/api/post.api';
import { CreatePostRequest } from '@/types/post';

export const createPost = async (postData: CreatePostRequest) => {
  try {
    const result = await postAPI.createPost(postData);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: '게시물 생성에 실패했습니다.',
    };
  }
};