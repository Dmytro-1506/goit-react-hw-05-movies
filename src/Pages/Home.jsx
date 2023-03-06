import { Link, useLocation } from "react-router-dom"

export const Home = ({ movies }) => {
    const location = useLocation();
    return (<div className="container">
        <h2>Trending today</h2>
        <ul className="movies-list">
            {movies.map(el => {
                return <li key={el.id}>
                    <Link to={`/movies/${el.id}`} state={{ from: `${location.pathname}${location.search}` }}>{el.title}</Link>
                </li>
            })}
        </ul>
    </div>)
}