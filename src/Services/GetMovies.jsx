import axios from "axios";

const API_KEY = '?api_key=32432509d17cea42104bbb7507a382c7';
const ORIGIN = 'https://api.themoviedb.org/3/';

export const GetMovies = async (name) => {
    
    if (name) {
        console.log(name);
        try {
            return axios.get(`${ORIGIN}search/movie${API_KEY}&query=${name}&page=1`).then(res => res.data.results)
        } catch (error) {
            console.log(error);
        }
    }
    const movies = await axios.get(`${ORIGIN}trending/all/day${API_KEY}&page=1`).then(res => res.data.results)
    return movies
}
