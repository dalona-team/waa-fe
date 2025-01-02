import { Letter } from '@/pages/my-letter';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

async function fetchMyLetter(): Promise<Letter[]> {
  const accessToken = Cookies.get('accessToken');
  const response = await fetch('https://www.jellyletter.site:8080/api/letter/user-pet', {
    headers: {
      'Authorization': accessToken ?? ''
    }
  });

  if (!response.ok) {
    if (response.status === 401) {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      throw new Error('Unauthorized');
    } else {
      throw new Error('Failed to fetch data');
    }
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Invalid response format');
  }

  const data = await response.json();
  return data.map((letter: Letter) => ({
    ...letter,
    content: letter.content.replace(/\n/g, ' ')
  }));
}

export function useMyLetter() {
  return useQuery<Letter[]>({
    queryKey: ['myLetter'],
    queryFn: fetchMyLetter
  });
}