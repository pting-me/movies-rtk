import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemCard } from './ItemCard';
import { useCatalogQuery } from './movieApi';
import { createShallowHumps } from './utils';

export interface CatalogParams extends Record<string, string> {
  category: string;
  page: string;
}

export const MovieCatalog: FC = () => {
  const { category = 'popular', page = '1' } = useParams<CatalogParams>();

  const { data, error, isLoading } = useCatalogQuery({
    category,
    page,
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

  const { results } = data;
  return (
    // Note: The max value in auto-fit (14rem) needs to match width given to ItemCard (w-56)
    <div className="p-8 gap-8 justify-evenly grid grid-cols-[repeat(auto-fit,minmax(0,14rem))]">
      {results.map((result) => {
        const catalogItem = createShallowHumps(result);
        return (
          <ItemCard className="w-56" key={catalogItem.id} item={catalogItem} />
        );
      })}
    </div>
  );
};
