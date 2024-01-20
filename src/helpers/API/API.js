import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '1ff5f9e57945bfb0ff78aaaf0ecf4ac6';

const params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/week', { params });
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`, { params });
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, { params });
  return data.cast;
};
export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      ...params,
      page: 1,
    },
  });
  return data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get('search/movie', {
    params: {
      ...params,
      query,
      include_adult: true,
      page: 1,
    },
  });
  return response.data;
};
