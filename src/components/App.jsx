import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GetMovies } from 'Services/GetMovies';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { MovieDetails } from 'Pages/MovieDetails';
import { NotFound } from 'Pages/NotFound';
import { Header } from './Header/Header';
import { MovieList } from './MovieList/MovieList';

const getMovies = new GetMovies();

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies.trending().then(res => setMovies(res))
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies />} >
          <Route path=":query" element={<MovieList/> } />
        </Route>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
};