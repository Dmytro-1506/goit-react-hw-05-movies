import { useEffect, useState } from "react"
import { GetMovies } from "Services/GetMovies";
// import { Link } from "react-router-dom";
import { MovieList } from "components/MovieList/MovieList";
import { useParams } from "react-router-dom";

const getMovies = new GetMovies();

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState('');
    const { query } = useParams(`?query=${searchName}`);

    const searchMovie = (e) => {
        e.preventDefault()
        setSearchName(e.target.movieToFind.value)
    };

    useEffect(() => {
        if (!searchName) {
            return
        }
        getMovies.byName(searchName).then(res => setMovies(res))
    }, [searchName])

    return <div className="container">
        <form action="" onSubmit={searchMovie}>
            <input type="text" name='movieToFind' />
            <button type="submit">search movie</button>
        </form>
        {(movies.length > 0) && <MovieList path={query} movies={movies} />}
    </div>
}