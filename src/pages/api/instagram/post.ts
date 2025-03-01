import { getServerSession } from 'next-auth/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getServerSession(req, res, authOptions);
  console.log('Session:', session);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const { imageUrl, caption } = req.body;
    console.log('Request body:', { imageUrl, caption });

    console.log('Access Token:', session.accessToken);

    // 1. 먼저 Instagram Business Account ID 가져오기
    const accountResponse = await fetch(
      `https://graph.facebook.com/v18.0/me/accounts?access_token=${session.accessToken}`
    );
    const accountData = await accountResponse.json();
    const instagramAccountId = accountData.data[0].instagram_business_account.id;

    // 2. 미디어 객체 생성
    const mediaResponse = await fetch(
      `https://graph.facebook.com/v18.0/${instagramAccountId}/media?image_url=${imageUrl}&caption=${caption}&access_token=${session.accessToken}`,
      { method: 'POST' }
    );
    const mediaData = await mediaResponse.json();

    // 3. 게시물 발행
    const publishResponse = await fetch(
      `https://graph.facebook.com/v18.0/${instagramAccountId}/media_publish?creation_id=${mediaData.id}&access_token=${session.accessToken}`,
      { method: 'POST' }
    );
    const publishData = await publishResponse.json();

    return res.status(200).json(publishData);
  } catch (error) {
    console.error('Error details:', error);
    return res.status(500).json({ message: 'Failed to post to Instagram', error });
  }
} 