import { Link, useLocation } from "react-router-dom"

export const BackButton = ({state}) => {
    // const location = useLocation();

    console.log(state);

    if (!state || !state.prevPage) return null;

    return <Link to={state.prevPage} >Go back</Link>
}