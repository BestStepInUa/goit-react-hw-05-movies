import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Loader from 'components/Loader/Loader';
import { CastWrapper } from './Cast.styled';
import CastList from './CastList/CastList';
import { fetchMovieCast } from 'helpers/API/API';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getMovieCast = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieCast = await fetchMovieCast(movieId, {
          signal: abortController.signal,
        });
        setCast(movieCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieCast();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  if (cast) {
    animateScroll.scrollMore(640);
  }

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error loading information. Please try again later.</p>}
      {cast && (
        <CastWrapper>
          <CastList cast={cast} />
        </CastWrapper>
      )}
    </>
  );
};

export default Cast;
