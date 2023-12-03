import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';
import { StyledHeader, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
