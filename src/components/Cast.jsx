import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetMovies } from "Services/GetMovies";

const getMovies = new GetMovies();

export const Cast = () => {
    const { movieId } = useParams();
    const [casts, setCasts] = useState();

    useEffect(() => {
        getMovies.credits(movieId).then(res => {
            setCasts(res.cast)
        })
    }, [movieId])

    if (casts) {
        return casts.map(el => {
            return <div key={el.id} className="actor">
                <img src={`https://image.tmdb.org/t/p/w342${el.profile_path
                    }`} alt={el.name} />
                <p>{el.name}</p>
                <p>character: {el.character}</p>
            </div>
        })
    }
}
