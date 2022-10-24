import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CatalogWidget } from './CatalogWidget';

export interface CatalogParams extends Record<string, string> {
  category: string;
  page: string;
}

export const CatalogPage: FC = () => {
  const { category = 'popular', page: rawPage = '1' } =
    useParams<CatalogParams>();
  const page = Number(rawPage);

  return <CatalogWidget category={category} page={page} />;
};
