import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import MoviesDetails from 'pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<div>Cats</div>} />
          <Route path="reviews" element={<div>Revievs</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
