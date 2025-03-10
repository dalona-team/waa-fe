import { axiosInstance } from './config';
import { CreatePostContentsRequest, CreatePostContentsResponse, CreatePostRequest, CreatePostResponse } from '../types/post';

export const postAPI = {
  createPost: async (data: CreatePostRequest): Promise<CreatePostResponse> => {
    const response = await axiosInstance.post('/api/post', data);
    return response.data;
  },
  createPostContents: async (data: CreatePostContentsRequest): Promise<CreatePostContentsResponse> => {
    const response = await axiosInstance.post('/api/post/contents', data);
    return response.data;
  },
};