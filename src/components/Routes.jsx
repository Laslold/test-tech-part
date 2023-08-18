import { Route, Routes } from 'react-router-dom';

import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const NotPage = lazy(() => import('../pages/NotPage'));
const DashboardPage = lazy(() => import('../pages/DashboardWrap'));
const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/Catalog'));
const FavoritePage = lazy(() => import('../pages/Favorite'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
