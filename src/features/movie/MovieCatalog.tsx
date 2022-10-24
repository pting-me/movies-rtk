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
    <div className="p-8">
      {results.map((result) => {
        const catalogItem = createShallowHumps(result);
        const { id } = catalogItem;

        return (
          <Link key={id} to={`/movie/${id}`}>
            <ItemCard item={catalogItem} />
          </Link>
        );
      })}
    </div>
  );
};
