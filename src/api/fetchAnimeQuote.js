import axios from 'axios';


const URL = 'https://animechan.vercel.app/api/random';

export const fetchAnimeQuote = async(query) => {
    const { data } = await axios.get(URL);

    return data;
}