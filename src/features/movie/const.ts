import { Category } from './types';

export const categoryLabels: Record<Category, string> = {
  popular: 'Popular Movies',
  top_rated: 'Top Rated Movies',
  upcoming: 'Upcoming Movies',
  recommendations: 'Recommended Movies',
};

export const getCategoryLabel = (category: string) => {
  return categoryLabels[category as Category] ?? 'Catalog';
};
