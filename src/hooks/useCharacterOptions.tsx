import { useQuery } from '@tanstack/react-query';

type CharacterOption = {
  groupId: string;
  groupName: string;
  code: number;
  codeName: string;
  orders: number;
  useYn: 'Y' | 'N';
};

async function fetchCharacterOptions(): Promise<CharacterOption[]> {
  const res = await fetch('https://www.jellyletter.site:8080/api/info?groupId=G0001');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data.filter((item: any) => item.useYn === 'Y').map((item: any) => ({
    code: item.code,
    codeName: item.codeName,
  }));
}

export function useCharacterOptions() {
  return useQuery<CharacterOption[], Error>({
    queryKey: ['characterOptions'],
    queryFn: fetchCharacterOptions,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    gcTime: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  });
}