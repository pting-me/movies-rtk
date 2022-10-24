import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useDetailsQuery } from './movieApi';

export const MovieDetails: FC = () => {
  const { movieId = '' } = useParams();

  const { data, error, isLoading } = useDetailsQuery({
    movieId,
  });

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data) {
    return <div>No movies found</div>;
  }

  const { title, tagline } = data;

  return (
    <div>
      <div>{title}</div>
      <div>{tagline}</div>
    </div>
  );
};
