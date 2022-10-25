import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CastMemberAvatar } from './CastMemberAvatar';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { LoadingState } from './LoadingState';
import { useCreditsQuery } from './movieApi';
import { createShallowHumps } from './utils';

interface Props {
  movieId: number;
}

export const MovieCastWidget: FC<Props> = (props) => {
  const { movieId } = props;

  const { data, error, isLoading } = useCreditsQuery({
    movieId,
  });

  if (error) {
    return <ErrorState />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (!data || !data.cast || data.cast.length === 0) {
    return <EmptyState />;
  }

  const { cast } = data;

  return (
    <div className="carousel gap-8">
      {cast.map((baseCastMember) => {
        const castMember = createShallowHumps(baseCastMember);
        const { id } = castMember;
        return (
          <div id={String(id)} className="carousel-item" key={id}>
            <Link to={`/person/${id}`}>
              <CastMemberAvatar
                castMember={createShallowHumps(baseCastMember)}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
