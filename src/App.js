import {Routes,Route} from 'react-router-dom';
import Home from './modules/Home/pages/Home';
import Login from './modules/Auth/pages/Login'
import Register from './modules/Auth/pages/Register';
import MovieDetails from './modules/Movie/pages/MovieDetails';
import MainLayout from './layouts/MainLayout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/movies/:movieId" element={<MovieDetails/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    
    </>
  );
}

export default App;
