import { axiosInstance } from './config';
import { GetDogsResponse } from '@/types/dog';

export const dogAPI = {
  getDogs: async (organizationId: number): Promise<GetDogsResponse> => {
    const response = await axiosInstance.get('/api/dog', {
      params: {
        organizationId
      }
    });
    return response.data;
  },
};