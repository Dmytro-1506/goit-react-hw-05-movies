import axios from "axios";

const API_KEY = '?api_key=32432509d17cea42104bbb7507a382c7';
const ORIGIN = 'https://api.themoviedb.org/3/';

export class GetMovies {
    trending = async () => {
        try {
            const res = await axios.get(`${ORIGIN}trending/movie/week${API_KEY}&language=en-US&page=1&include_adult=false`);
            return res.data.results;
        } catch (error) {
            console.log(error);
        }
    }

    byName = async (name) => {
        try {
            const res = await axios.get(`${ORIGIN}search/movie${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`);
            return res.data.results;
        } catch (error) {
            console.log(error);
        }
    }

    details = async (id) => {
        try {
            const res = await axios.get(`${ORIGIN}movie/${id}${API_KEY}&language=en-US`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    credits = async (id) => {
        try {
            const res = await axios.get(`${ORIGIN}movie/${id}/credits${API_KEY}&language=en-US`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    reviews = async (id) => {
        try {
            const res = await axios.get(`${ORIGIN}movie/${id}/reviews${API_KEY}&language=en-US`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}
