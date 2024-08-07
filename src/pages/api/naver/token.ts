import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, state } = req.query;

  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;

  const tokenResponse = await fetch(`https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&state=${state}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (!tokenResponse.ok) {
    return res.status(tokenResponse.status).json({ error: 'Failed to fetch token' });
  }

  const tokenData = await tokenResponse.json();
  res.status(200).json(tokenData);
}