import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovies } from "Services/GetMovies";

const getMovies = new GetMovies();

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovies.reviews(movieId).then(res => {
            if (res.results.length === 0) {
                return
            }
            setReviews(res.results)
        })
    }, [movieId])

    if (reviews.length === 0 ) {
        return <p>We don't have any reviews for this movie</p>
    }
    return reviews.map(el => {
        return <div key={el.id} className="review">
            <p>{el.author}</p>
            <p>{el.content}</p>
        </div>
    })
}