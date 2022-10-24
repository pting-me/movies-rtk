import { FC } from 'react';
import { CatalogItem } from './types';

interface Props {
  item: CatalogItem;
}

export const ItemCard: FC<Props> = (props) => {
  const {
    item: { title, posterPath },
  } = props;

  const basePath = 'https://image.tmdb.org/t/p/w154';
  return (
    <div className="w-56">
      <img className="w-full" src={`${basePath}${posterPath}`} alt={title} />
      <div className="text-center p-2">{title}</div>
    </div>
  );
};
