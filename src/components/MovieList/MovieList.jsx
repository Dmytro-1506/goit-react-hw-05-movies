import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
    return (<ul className="movies-list">
            {movies.map(el => {
                return <li key={el.id}>
                    <Link to={`/movies/${el.id}`}>{el.title}</Link>
                </li>
            })}
        </ul>)
}