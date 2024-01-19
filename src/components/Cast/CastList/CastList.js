import defaultCastImg from '../../../images/defaultCastImg.jpg';

const CastList = ({ cast }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => {
        const castImgSrc = profile_path
          ? IMAGE_URL + profile_path
          : defaultCastImg;
        return (
          <li key={id}>
            <img src={castImgSrc} alt={name} width="200px" />
            <p>
              <b>Name: </b>
              {name}
            </p>
            <p>
              <b>Character: </b>
              {character}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
