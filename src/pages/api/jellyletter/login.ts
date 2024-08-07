import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  const userInfoResponse = await fetch('https://openapi.naver.com/v1/nid/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const userInfo = await userInfoResponse.json();
  if(userInfo.response){
    const loginResponse = await fetch('https://www.jellyletter.site:8080/login/custom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'provider': 'naver',
        'name': userInfo.response.name,
        'nickname': userInfo.response.nickname,
        'email': userInfo.response.email,
        'mobile': userInfo.response.mobile
      } ),
    });
    const login = await loginResponse.json(); // 실제로는 JWT 토큰을 생성해야 합니다.
    res.status(200).json({ loginInfo: login });
  } else {
    res.status(400).json({ error: 'Invalid user info' });
  }
}