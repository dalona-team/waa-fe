import { useState } from 'react';
import { useRouter } from 'next/router';
import { 
  TextField, 
  Button, 
  IconButton, 
  InputAdornment,
  Paper
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <Paper elevation={3} className="w-[400px] p-8">
        <form onSubmit={handleLogin} className="space-y-6">
          <TextField
            fullWidth
            label="아이디"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            fullWidth
            label="비밀번호"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'primary.1000',
              '&:hover': {
                bgcolor: 'primary.900',
              },
            }}
          >
            로그인
          </Button>
        </form>
      </Paper>
    </div>
  );
}