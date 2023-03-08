import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { GetMovies } from "Services/GetMovies";
import { MovieList } from "components/MovieList/MovieList";

const getMovies = new GetMovies();

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies.trending().then(res => setMovies(res))
    }, [movies])
    
    const location = useLocation();
    return (<div className="container">
        <h2>Trending today</h2>
        <MovieList movies={movies} />
        {/* <ul className="movies-list">
            {movies.map(el => {
                return <li key={el.id}>
                    <Link to={`/movies/${el.id}`} state={{ from: `${location.pathname}${location.search}` }}>{el.title}</Link>
                </li>
            })}
        </ul> */}
    </div>)
};