import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'helpers/API/API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    const abortController = new AbortController();
    const getSearchMovie = async () => {
      if (abortController.current) {
        abortController.current.abort();
      }
      abortController.current = new AbortController();

      try {
        setLoading(true);
        setError(null);
        const { results } = await fetchSearchMovie(query, {
          signal: abortController.current.signal,
        });
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getSearchMovie();

    return () => {
      abortController.abort();
    };
  }, [query]);

  return (
    <>
      {loading && <Loader />}
      {error && !loading && <p>There are no movies for this search query.</p>}
      <SearchForm />
      <h2>Movies Page</h2>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
