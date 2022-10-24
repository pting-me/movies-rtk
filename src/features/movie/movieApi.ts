import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CatalogQueryOptions,
  CatalogResponse,
  DetailsQueryOptions,
  DetailsResponse,
} from './types';
import { createParamString } from './utils';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    details: builder.query<DetailsResponse, DetailsQueryOptions>({
      query: (options: DetailsQueryOptions) => {
        const { movieId } = options;
        const basePath = `movie/${movieId}`;

        const params = {
          api_key: import.meta.env.TMDB_API_KEY_V3,
        };

        const paramString = createParamString(params);

        return `${basePath}?${paramString}`;
      },
    }),
    catalog: builder.query<CatalogResponse, CatalogQueryOptions>({
      query: (options: CatalogQueryOptions) => {
        const { category, language, page, region, movieId } = options;

        const pathSegments = ['movie'];

        if (movieId !== undefined) {
          pathSegments.push(String(movieId));
        }

        pathSegments.push(category);

        const basePath = pathSegments.join('/');

        const params = {
          api_key: import.meta.env.TMDB_API_KEY_V3,
          language,
          page: page ? String(page) : undefined,
          region,
        };

        return `${basePath}?${createParamString(params)}`;
      },
    }),
  }),
});

export const { useDetailsQuery, useCatalogQuery } = movieApi;
