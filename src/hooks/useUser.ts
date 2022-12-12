/* eslint-disable react-hooks/exhaustive-deps */
import { loginReducer } from '@/store/user';
import { getUser } from '@/utilities/locastorage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useUser() {
  const [user, setUser] = useState(undefined);
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.user);

  useEffect(() => {
    if (store.user?.token) return;
    const userInfo = getUser();
    dispatch(loginReducer(userInfo));
    setUser(userInfo);
  }, []);

  return { user };
}
