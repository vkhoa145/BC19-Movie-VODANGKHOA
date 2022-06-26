import {Routes,Route} from 'react-router-dom';
import Home from './modules/Home/pages/Home';
import Login from './modules/Auth/pages/Login'
import Register from './modules/Auth/pages/Register';
import MovieDetails from './modules/Movie/pages/MovieDetails';
import AdminLayout from './layouts/AdminLayout'
import MainLayout from './layouts/MainLayout';
import AddMovie from './modules/AdminMovie/pages/AddMovie';
import UppdateMovie from './modules/AdminMovie/pages/UppdateMovie';
import MovieList from './modules/AdminMovie/pages/MovieList';
import AdminRoute from './routes/AdminRoutes';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/movies/:movieId" element={<MovieDetails/>}/>
        </Route>

        <Route path="/admin" element={<AdminRoute><AdminLayout/></AdminRoute>}>
          <Route path="movies" element={<MovieList/>}/>
          <Route path="movies/add" element={<AddMovie/>}/>
          <Route path="movies/uppdate/:movieId" element={<UppdateMovie/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    
    </>
  );
}

export default App;
