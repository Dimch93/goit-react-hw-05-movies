import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('./Pages/Home/Home'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
