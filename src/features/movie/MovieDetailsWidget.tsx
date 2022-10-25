import { FC } from 'react';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { LoadingState } from './LoadingState';
import { useDetailsQuery } from './movieApi';
import { MovieCastWidget } from './MovieCastWidget';
import { Rating } from './Rating';
import { createShallowHumps } from './utils';

interface Props {
  movieId: number;
}

const basePath = 'https://image.tmdb.org/t/p/w342';

export const MovieDetailsWidget: FC<Props> = (props) => {
  const { movieId } = props;

  const { data, error, isLoading } = useDetailsQuery({
    movieId,
  });

  if (error) {
    return <ErrorState />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (!data) {
    return <EmptyState />;
  }

  const movie = createShallowHumps(data);

  const { title, tagline, posterPath, voteAverage, genres, overview } = movie;

  return (
    <div className="flex max-lg:flex-wrap p-8 gap-8">
      <div className="w-80 flex-0">
        <img src={`${basePath}${posterPath}`} alt={title} />
      </div>
      <div className="flex-1 overflow-hidden">
        <h1 className="text-3xl uppercase">{title}</h1>
        <div className="py-2 text-sm uppercase">{tagline}</div>
        <div className="py-2 flex justify-between">
          <Rating rating={voteAverage} labelStyle="text" />
          <div>Language, runtime, year</div>
        </div>
        <h2 className="pt-8 uppercase">The Genres</h2>
        <div className="py-2 flex gap-2">
          {genres.map(({ name }) => (
            <div>{name}</div>
          ))}
        </div>
        <h2 className="pt-8 uppercase">The Synopsis</h2>
        <div className="py-2">{overview}</div>
        <h2 className="pt-8 uppercase">The Cast</h2>
        <div className="pt-4">
          <MovieCastWidget movieId={movieId} />
        </div>
      </div>
    </div>
  );
};
