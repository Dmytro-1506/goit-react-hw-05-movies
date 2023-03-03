import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovies } from "Services/GetMovies";

const getMovies = new GetMovies();

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        getMovies.reviews(movieId).then(res => {
        setReviews(res.results)
    })
    }, [movieId])

    if (reviews) {
        return reviews.map(el => {
            return <div key={el.id} className="review">
                <p>{el.author}</p>
                <p>{el.content}</p>
            </div>
        })
    }
}