import Loader from 'components/Loader/Loader';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { fetchTrending } from 'helpers/API/API';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function getTrending() {
      try {
        setLoading(true);
        setError(null);
        const fetchedTrendingMovies = await fetchTrending({
          signal: abortController.signal,
        });
        setMovies(fetchedTrendingMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getTrending();

    return () => abortController.abort();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <p>Error loading movie. Please try again later.</p>}
      {!loading && movies?.length > 0 && <TrendingMoviesList movies={movies} />}
    </>
  );
};

export default Home;
