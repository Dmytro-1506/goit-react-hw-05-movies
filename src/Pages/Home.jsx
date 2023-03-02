import { Link } from "react-router-dom"

export const Home = ({ movies }) => {
    console.log(movies);
    return (<div className="container">
        <h2>Trending today</h2>
        <ul className="movies-list">
            {movies.map(el => {
                return <li key={el.id}>
                    <Link to={`/movies/${el.id}`}>{el.title}</Link>
                </li>
            })}
        </ul>
    </div>)
}