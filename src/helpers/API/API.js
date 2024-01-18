import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '1ff5f9e57945bfb0ff78aaaf0ecf4ac6';

const params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchTrending = async () => {
  const { data } = await axios.get('trending/movie/day', { params });
  console.log('Trending movies:', data.results);
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`, { params });
  return response.data;
};
