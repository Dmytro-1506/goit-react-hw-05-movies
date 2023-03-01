import { Link } from "react-router-dom"

export const Home = ({ images }) => {
    console.log(images)
    return (<>
        <h2>Trending today</h2>
        <ul className="movies-list">
            {images.map(el => {
                return <li key={el.id}>
                    <Link >{el.title}</Link>
                </li>
            })}
        </ul>
    </>)
}