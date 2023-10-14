// Layout.js
import { Suspense } from 'react';
import { AppBar } from './app_bar/AppBar'; 
import { Outlet } from 'react-router-dom';
import { Container } from './laout-style';

export const Layout = () => {
  return (
    <div>
      <Container>
        <AppBar />
      </Container>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
