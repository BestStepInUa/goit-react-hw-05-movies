import { Card, Info, Thumb } from './MovieCard.styled';
import defaultImg from '../../images/defaultImg.png';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';
  const movieImgSrc = poster_path ? IMAGE_URL + poster_path : defaultImg;
  const userScore = vote_average
    ? Math.round((Number(vote_average) * 100) / 10)
    : 'no data available';
  return (
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
  );
};

export default MovieCard;
