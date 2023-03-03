import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovies } from "Services/GetMovies";
import { Cast } from "components/Cast";
import { Reviews } from "components/Reviews";

const getMovies = new GetMovies();

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    const getGenres = () => {
        console.log(movie.genres);
        if (movie.genres) {
            return movie.genres.map(el => {
                return <p key={el.id}>{el.name}</p>
            })
        }
    }

    useEffect(() => {
        getMovies.details(movieId).then(res => {
            console.log(res);
            setMovie(res)
        })
    }, [movieId]);

    getMovies.credits(movieId).then(res => {
        // console.log(res);
    })

    getMovies.reviews(movieId).then(res => {
        // console.log(res);
    })

    
    return <div className="container">
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
            <Cast></Cast>
            <Reviews></Reviews>
        </div>
    </div>
};
