import { useState, useEffect } from "react";
import { GetMovies } from "Services/GetMovies";
import { MovieList } from "components/MovieList/MovieList";

const getMovies = new GetMovies();

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies.trending().then(res => setMovies(res))
    }, [movies])
    
    return (<div className="container">
        <h2>Trending today</h2>
        <MovieList movies={movies} />
    </div>)
};