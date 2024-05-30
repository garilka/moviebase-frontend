import { SearchMeta } from './search.types';

export type Movie = {
  id: number;
  title: string;
  releaseDate?: Date | null;
  overview?: string | null;
  voteAverage?: Number | null;
  originalTitle?: string | null;
  posterUrl?: string | null;
};

export type MoviesResponse = { meta: SearchMeta } & { movies: Movie[] };
