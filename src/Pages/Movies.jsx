import { useEffect, useState } from "react"
import { GetMovies } from "Services/GetMovies";
import { Link } from "react-router-dom";

export const Movies = () => {
    // const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([])

    const hadleSearch = (e) => {
        e.preventDefault()
        let searchName = e.target.movieToFind.value
        if (!searchName) {
            return
        }
        GetMovies(searchName).then(res => setMovies(res))
    }

    console.log(movies.length);

    return <>
        {!movies.length && (<form action="" onSubmit={hadleSearch}>
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