import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import { fetchMovieDetails } from 'helpers/API/API';
import {
  AdditionalInfoWrapper,
  GoBackBtn,
  MovieDetailsWrapper,
} from './MovieDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBackBtnLocationRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const abortController = new AbortController();
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieDetails = await fetchMovieDetails(movieId, {
          signal: abortController.signal,
        });
        setMovie(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error loading movie. Please try again later.</p>}
      {movie && (
        <>
          <GoBackBtn to={goBackBtnLocationRef.current}>
            <MdArrowBackIos />
            Go back
          </GoBackBtn>
          <MovieDetailsWrapper>
            <MovieCard movie={movie || {}} />
          </MovieDetailsWrapper>
          <AdditionalInfoWrapper>
            <h4>Additional information</h4>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </AdditionalInfoWrapper>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Outlet />
          {/* </Suspense> */}
        </>
      )}
    </>
  );
};

export default MoviesDetails;
