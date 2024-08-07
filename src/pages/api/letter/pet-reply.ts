import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = req.body;

    try {
      const response = await fetch('https://www.jellyletter.site:8080/api/letter/pet-reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': req.cookies.accessToken ?? ''
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: '오류가 발생했습니다.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}