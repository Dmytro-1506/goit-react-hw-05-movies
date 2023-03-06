import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { GetMovies } from "Services/GetMovies";
import { BackButton } from "components/BackButton/BackButton";

const getMovies = new GetMovies();

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const location = useLocation();

    const getGenres = () => {
        if (movie.genres) {
            return movie.genres.map(el => {
                return <p key={el.id}>{el.name}</p>
            })
        }
    }

    useEffect(() => {
        getMovies.details(movieId).then(res => {
            setMovie(res)
        })
    }, [movieId]);

    return <div className="container">
        <BackButton state={{ prevPage: location.pathname }} />
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.original_title
            } />
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <div className="genres">{getGenres()}</div>
        <div className="addInform">
            <p>Additional information</p>
            <Link to="cast" replace>Cast</Link>
            <Link to="reviews" replace>Reviews</Link>
        </div>
        <Outlet/>
    </div>
};
