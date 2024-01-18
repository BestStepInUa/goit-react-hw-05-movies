const { Link } = require('react-router-dom');

const TrendingMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingMoviesList;
