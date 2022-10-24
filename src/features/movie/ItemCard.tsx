import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from './Rating';
import { CatalogItem } from './types';

interface Props extends ComponentPropsWithoutRef<'div'> {
  item: CatalogItem;
}

export const ItemCard: FC<Props> = (props) => {
  const {
    item: { title, id, posterPath, voteAverage, voteCount },
    className,
    ...rest
  } = props;

  const basePath = 'https://image.tmdb.org/t/p/w154';
  return (
    <div
      className={clsx(
        className,
        'hover:shadow hover:bg-primary hover:text-primary-content hover:transition-all'
      )}
      {...rest}
    >
      <Link className="flex flex-col h-full" to={`/movie/${id}`}>
        <img className="w-full" src={`${basePath}${posterPath}`} alt={title} />
        <div className="flex-1 flex flex-col justify-between p-4 gap-4">
          <div className="text-center">{title}</div>
          <div className="text-center">
            <Rating id={String(id)} rating={voteAverage} count={voteCount} />
          </div>
        </div>
      </Link>
    </div>
  );
};
