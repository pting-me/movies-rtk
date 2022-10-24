import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useDetailsQuery } from './movieApi';
import { DetailsResponse } from './types';

interface ViewProps {
  data: DetailsResponse;
}

interface Props {
  movieId: number;
}

export const MovieDetailsWidget: FC<Props> = (props) => {
  const { movieId } = props;

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
