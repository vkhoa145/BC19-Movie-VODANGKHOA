import { Routes, Route } from 'react-router-dom';
import Home from './modules/Home/pages/Home';
import Login from './modules/Auth/pages/Login'
import Register from './modules/Auth/pages/Register';
import MovieDetails from './modules/Movie/pages/MovieDetails';


import AddMovie from './modules/AdminMovie/pages/AddMovie';
import UppdateMovie from './modules/AdminMovie/pages/UppdateMovie';
import MovieList from './modules/AdminMovie/pages/MovieList';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import AdminRoute from './routes/AdminRoutes';
import CheckoutLayout from './layouts/Checkout';
import { Suspense, lazy } from 'react';
import Loading from './Loading/Loading';
const Checkoutlayout = lazy(() => import('./layouts/Checkout'))
function App() {
  return (
    <>
      
      <Routes>
        
        {/* Layout Home */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
        {/* Layout Checkout */}
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <Route>
            <Checkoutlayout path="/checkout/:maLichChieu" element={<CheckoutLayout />} />
          </Route>
        </Suspense> */}
        <Route>
            <Route path="/checkout/:maLichChieu" element={<CheckoutLayout />} />
          </Route>
        {/* Layout Admin */}
        <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/add" element={<AddMovie />} />
          <Route path="movies/uppdate/:movieId" element={<UppdateMovie />} />
        </Route>
        {/* Layout Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </>
  );
}

export default App;
