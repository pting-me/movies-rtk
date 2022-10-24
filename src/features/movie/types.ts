/**
 * Data transfer objects (DTO)
 * Complex objects that will be passed from the API
 */

import { CamelCasedProperties } from 'type-fest';

export interface CatalogItemDto {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // maps to genre?
  id: number;
  original_language: string; // 'en'
  original_title: string;
  overview: string;
  popularity: number; // not sure what it's out of, but 3 floating digits
  poster_path: string;
  release_date: string; // formatted YYYY-MM-DD
  title: string;
  video: false; // all have been false for some reason, will check for others
  vote_average: number; // appears to be out of 10
  vote_count: number;
}

export type CatalogItem = CamelCasedProperties<CatalogItemDto>;

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Country {
  iso_3166_1: string;
  name: string;
}

export interface Language {
  iso_639_1: string;
  name: string;
}

export interface MovieDto {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: unknown;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

/**
 * Payloads to be used by various API calls
 * Responses should be built off of the DTO definitions
 */

/* details */

export type DetailsResponse = MovieDto;

export interface DetailsQueryOptions {
  movieId: string;
}

/* catalog */

export const categories = [
  'popular',
  'top_rated',
  'now_playing',
  'upcoming',
] as const;

export type Category = typeof categories[number];

export interface CatalogResponse {
  page: number;
  results: CatalogItemDto[];
  total_pages: number;
  total_results: number;
}

export interface CatalogQueryOptions {
  /**
   * Should be in `Category`, but we'll let the query handle a runtime error rather than complicating our logic.
   * @default 'popular'
   */
  category: string;
  /**
   * Pass a ISO 639-1 value to display translated data for the fields that support it.
   * @default 'en-US'
   */
  language?: string; // ISO 639-1
  /**
   * Specify which page to query.
   * @default '1'
   */
  page?: string;
  /**
   * Specify region
   */
  region?: string;
}
