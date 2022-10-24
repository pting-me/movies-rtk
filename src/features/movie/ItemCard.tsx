import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';
import { Link } from 'react-router-dom';
import { CatalogItem } from './types';

interface Props extends ComponentPropsWithoutRef<'div'> {
  item: CatalogItem;
}

export const ItemCard: FC<Props> = (props) => {
  const {
    item: { title, id, posterPath },
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
      <Link to={`/movie/${id}`}>
        <img className="w-full" src={`${basePath}${posterPath}`} alt={title} />
        <div className="text-center p-2">{title}</div>
      </Link>
    </div>
  );
};
