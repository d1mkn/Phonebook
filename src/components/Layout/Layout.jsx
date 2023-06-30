import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Container className="page-content">
          <ToastContainer />
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
