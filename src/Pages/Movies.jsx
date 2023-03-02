import { useState } from "react"
import { GetMovies } from "Services/GetMovies";
import { Link } from "react-router-dom";

const getMovies = new GetMovies();

export const Movies = () => {
    const [movies, setMovies] = useState([]);

    const searchMovie = (e) => {
        e.preventDefault()
        let searchName = e.target.movieToFind.value
        if (!searchName) {
            return
        }
        getMovies.byName(searchName).then(res => setMovies(res))
    };

    return <>
        {!movies.length && (<form action="" onSubmit={searchMovie}>
            <input type="text" name='movieToFind' />
            <button type="submit">search movie</button>
        </form>)}
        {(movies.length > 0) && (<ul className="movies-list">
            {movies.map(el => {
                return <li key={el.id}>
                    <Link to={`/movies/${el.id}`}>{el.title}</Link>
                </li>
            })}
        </ul>)}
    </>
}