import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CatalogQueryOptions,
  CatalogResponse,
  DetailsQueryOptions,
  DetailsResponse,
} from './types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    details: builder.query<DetailsResponse, DetailsQueryOptions>({
      query: (options: DetailsQueryOptions) => {
        const { movieId } = options;
        const basePath = `movie/${movieId}`;

        const params = {
          api_key: import.meta.env['TMDB_API_KEY_V3'],
        };

        const paramString = Object.entries(params)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');

        return `${basePath}?${paramString}`;
      },
    }),
    catalog: builder.query<CatalogResponse, CatalogQueryOptions>({
      query: (options: CatalogQueryOptions) => {
        const { category, language, page, region } = options;

        const basePath = `movie/${category}`;

        const params = {
          api_key: import.meta.env['TMDB_API_KEY_V3'],
          language,
          page,
          region,
        };

        const paramString = Object.entries(params)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');

        return `${basePath}?${paramString}`;
      },
    }),
  }),
});

export const { useDetailsQuery, useCatalogQuery } = movieApi;
