import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import defaultImg from '../../images/defaultImg.png';
import { Card, Info, MovieDetailsWrapper, Thumb } from './MovieDetails.styled';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/API/API';

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

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie || {};
  const movieImgSrc = poster_path ? IMAGE_URL + poster_path : defaultImg;
  const userScore = Math.round((Number(vote_average) * 100) / 10);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error loading movie. Please try again later.</p>}
      <MovieDetailsWrapper>
        <Card>
          <Thumb>
            <img src={`${movieImgSrc}`} alt={title} />
          </Thumb>
          <Info>
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>
            <ul>
              <li>
                <p>
                  User Score: <span>{userScore}%</span>
                </p>
              </li>
              <li>
                <h3>Overview</h3>
                <p>{overview}</p>
              </li>
              <li>
                <h3>Genres</h3>
                <p>{genres.map(genre => genre.name).join(' ')}</p>
              </li>
            </ul>
          </Info>
        </Card>
      </MovieDetailsWrapper>
    </>
  );
};

export default MoviesDetails;
