// Layout.js
import { Suspense } from 'react';
import { AppBar } from './app_bar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
