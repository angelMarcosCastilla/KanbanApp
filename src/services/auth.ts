import { API_URL } from '@/config';
import { loginForm } from '@/interfaces/auth';

export const login = async (user: loginForm) => {
  const data = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const response = await data.json();
  return response;
};
