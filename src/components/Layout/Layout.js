// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { StyledLink, StyledNav } from './Layout.styled.js';

const Layout = () => {
  return (
    <div>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
