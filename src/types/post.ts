export interface Post {
  id: number;
  dogId: number;
  instagramUrl: string;
  createdAt: string;
  createdBy: number;
}

export interface CreatePostRequest {
  dogId: number;
  instagramUrl: string;
}

export interface CreatePostResponse extends Post {}

export interface CreatePostContentsRequest {
  templateId: number;
  dogId: number;
  imageFileIds: number[];
}

export interface CreatePostContentsResponse {
  content: string;
  imageUrls: string[];
}