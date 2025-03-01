import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { Button, TextField } from '@mui/material';

export default function InstagramPost() {
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');

  const handlePost = async () => {
    const response = await fetch('/api/instagram/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl, caption }),
    });

    if (response.ok) {
      alert('Instagram에 게시되었습니다!');
    } else {
      alert('게시 실패');
    }
  };

  if (!session) {
    return (
      <Button onClick={() => signIn('facebook')}>
        Facebook으로 로그인
      </Button>
    );
  }

  return (
    <div className="space-y-4">
      <TextField
        fullWidth
        label="이미지 URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        label="캡션"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <Button 
        variant="contained"
        onClick={handlePost}
      >
        Instagram에 게시
      </Button>
    </div>
  );
} 