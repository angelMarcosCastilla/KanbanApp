import { Outlet } from 'react-router-dom';

export default function PrivateRouter() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
