import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'helpers/API/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedTrendingMovies = await fetchTrendingMovies({
          signal: abortController.signal,
        });
        setMovies(fetchedTrendingMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();

    return () => abortController.abort();
  }, []);

  return (
    <>
      <h1>Weekly trending movies:</h1>
      {loading && <Loader />}
      {error && <p>Error loading movies. Please try again later.</p>}
      {!loading && movies?.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
