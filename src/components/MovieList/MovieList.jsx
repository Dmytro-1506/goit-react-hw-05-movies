import { Link, useLocation } from "react-router-dom";

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (<ul className="movies-list">
            {movies.map(el => {
                return <li key={el.id}>
                    <Link to={`/movies/${el.id}`} state={{ from: `${location.pathname}${location.search}` }}>{el.title}</Link>
                </li>
            })}
        </ul>)
}