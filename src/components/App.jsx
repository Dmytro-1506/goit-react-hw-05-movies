import { useState, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GetMovies } from 'Services/GetMovies';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { NotFound } from 'Pages/NotFound';
import { Header } from './Header/Header';

// const Home = lazy(() => import('../Pages/Home'));
// const Movies = lazy(() => import('../Pages/Movies'));
// const NotFound = lazy(() => import('../Pages/NotFound'));

export const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    GetMovies().then(res => setImages(res))
    }, [])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};