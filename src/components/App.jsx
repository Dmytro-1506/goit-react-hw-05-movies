import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { MovieDetails } from 'Pages/MovieDetails';
import { NotFound } from 'Pages/NotFound';
import { Header } from './Header/Header';
import { Cast } from 'Pages/Cast';
import { Reviews } from 'Pages/Reviews';

export const App = () => {
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
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
};