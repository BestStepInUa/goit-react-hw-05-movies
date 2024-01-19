import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Loader from 'components/Loader/Loader';
import { ReviewsWrapper } from './Reviews.styled';
import ReviewsList from './ReviewsList/ReviewsList';
import { fetchMovieReviews } from 'helpers/API/API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const getMovieReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieReviews = await fetchMovieReviews(movieId, {
          signal: abortController.signal,
        });
        setReviews(movieReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  if (reviews) {
    animateScroll.scrollMore(400);
  }

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error loading movie reviews. Please try again later.</p>}
      {reviews && (
        <ReviewsWrapper>
          <ReviewsList reviews={reviews} />
        </ReviewsWrapper>
      )}
      {!loading && reviews?.length === 0 && (
        <div>We dont have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;
