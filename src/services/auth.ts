import { API_URL } from '@/config';
import { loginForm, registerData } from '@/interfaces/auth';
import axios from 'axios';

export const login = async (user: loginForm) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, user);
  return data;
};

export const registerUser = async (user: registerData) => {
  const { data } = await axios.post(`${API_URL}/user/create`, user);
  return data;
};
