import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, password }),
    });

    if (response.ok) {
      router.push('/');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleLogin} className="w-[400px] space-y-4 p-8 rounded-lg">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
          className="w-full p-3 border border-gray-100 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="w-full p-3 border border-gray-100 rounded"
        />
        <button
          type="submit"
          className="w-full p-3 bg-primary-1000 text-white rounded text-white-1000"
        >
          로그인
        </button>
      </form>
    </div>
  );
} 