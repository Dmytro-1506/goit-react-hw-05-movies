import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetMovies } from "Services/GetMovies";

const getMovies = new GetMovies();

export const Cast = () => {
    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        getMovies.credits(movieId).then(res => {
            console.log(res);
            if (res.cast.length === 0) {
                return
            }
            setCasts(res.cast)
        })
    }, [movieId])

    if (casts.length === 0) {
        return <p>We don't have any casts for this movie</p>
    }
    return casts.map(el => {
        return <div key={el.id} className="actor">
            <img src={`https://image.tmdb.org/t/p/w342${el.profile_path
                }`} alt={el.name} />
            <p>{el.name}</p>
            <p>character: {el.character}</p>
        </div>
    })
};
