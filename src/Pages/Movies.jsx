import { useEffect, useState } from "react"
import { GetMovies } from "Services/GetMovies";
import { MovieList } from "components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const getMovies = new GetMovies();

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchName = searchParams.get("query") ?? "";

    const searchMovie = (e) => {
        e.preventDefault()
        const query = e.target.movieToFind.value;
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
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
        {(movies.length > 0) && <MovieList movies={movies} />}
    </div>
}