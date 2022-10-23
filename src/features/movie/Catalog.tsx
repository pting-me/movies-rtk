import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCatalogQuery } from './movieApi';

export interface CatalogParams extends Record<string, string> {
  category: string;
  page: string;
}

export const Catalog: FC = () => {
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
    <div>
      {results.map((movie) => {
        const { title, id } = movie;
        return (
          <div key={id}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};
