import { FC } from 'react';
import { CatalogItemCard } from './CatalogItemCard';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { LoadingState } from './LoadingState';
import { useCatalogQuery } from './movieApi';
import { createShallowHumps } from './utils';

interface Props {
  category: string;
  page: number;
  movieId?: number;
}

export const CatalogWidget: FC<Props> = (props) => {
  const { category, page, movieId } = props;

  const { data, error, isLoading } = useCatalogQuery({
    category,
    page,
    movieId,
  });

  if (error) {
    return <ErrorState />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />;
  }

  const { results } = data;

  return (
    <div className="p-8">
      {/* Note: The max value in auto-fit (14rem) needs to match width given to ItemCard (w-56) */}
      <div className="gap-8 justify-evenly grid grid-cols-[repeat(auto-fit,minmax(0,14rem))]">
        {results.map((result) => {
          const catalogItem = createShallowHumps(result);
          return (
            <CatalogItemCard
              className="w-56"
              key={catalogItem.id}
              item={catalogItem}
            />
          );
        })}
      </div>
    </div>
  );
};
