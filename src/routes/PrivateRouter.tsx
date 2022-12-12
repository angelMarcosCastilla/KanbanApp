/* eslint-disable react-hooks/exhaustive-deps */
import useUser from '@/hooks/useUser';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {
  const { user } = useUser();

  if (user === undefined) return <h1>Loading</h1>;
  if (user === null) return <Navigate to="/login" />;

  return (
    <>
      adasdasd
      <Outlet></Outlet>
    </>
  );
}
