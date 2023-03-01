import { Link } from "react-router-dom";
import './header.css'

export const Header = () => {
    return <nav style={{
        fontSize: '60',
        margin: '0 auto',
        padding: '20px',
        border: '2px solid'
    }}>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/movies">Movies</Link>
    </nav>
}