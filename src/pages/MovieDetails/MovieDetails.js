import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/API/API';
import {
  AdditionalInfoWrapper,
  Card,
  Info,
  MovieDetailsWrapper,
  Thumb,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';
import defaultImg from '../../images/defaultImg.png';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie || {};
  const movieImgSrc = poster_path ? IMAGE_URL + poster_path : defaultImg;
  const userScore = vote_average
    ? Math.round((Number(vote_average) * 100) / 10)
    : 'no data available';

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error loading movie. Please try again later.</p>}
      {movie && (
        <>
          <MovieDetailsWrapper>
            <Card>
              <Thumb>
                <img src={`${movieImgSrc}`} alt={title} />
              </Thumb>
              <Info>
                <h2>
                  {title} ({release_date && release_date.slice(0, 4)})
                </h2>
                <ul>
                  <li>
                    <p>
                      User Score: <span>{userScore}%</span>
                    </p>
                  </li>
                  <li>
                    <h3>Overview</h3>
                    <p>{overview ? overview : 'no data available'}</p>
                  </li>
                  <li>
                    <h3>Genres</h3>
                    <p>
                      {genres
                        ? genres.map(genre => genre.name).join(' ')
                        : 'no data available'}
                    </p>
                  </li>
                </ul>
              </Info>
            </Card>
          </MovieDetailsWrapper>
          <AdditionalInfoWrapper>
            <h4>Additional information</h4>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </AdditionalInfoWrapper>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesDetails;
