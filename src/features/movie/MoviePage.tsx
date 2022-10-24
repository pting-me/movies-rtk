import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CatalogWidget } from './CatalogWidget';
import { MovieDetailsWidget } from './MovieDetailsWidget';

interface MovieParams extends Record<string, string> {
  category: string;
  page: string;
}

export const MoviePage: FC = () => {
  const { movieId: rawMovieId, page: rawPage } = useParams<MovieParams>();

  const movieId = Number(rawMovieId);
  const page = Number(rawPage);

  if (!movieId) {
    return <div>Movie ID is not valid</div>;
  }

  return (
    <div>
      <MovieDetailsWidget movieId={movieId} />
      <CatalogWidget category="recommendations" page={page} movieId={movieId} />
    </div>
  );
};
