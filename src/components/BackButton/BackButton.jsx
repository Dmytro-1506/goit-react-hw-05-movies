import { Link, useLocation } from "react-router-dom"

export const BackButton = () => {
    const {state} = useLocation();

    if (!state || !state.from) return null;

    return <Link to={state.from} >Go back</Link>
}