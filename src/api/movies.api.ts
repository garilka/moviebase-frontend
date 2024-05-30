import { config } from '../config/config';
import { MoviesResponse } from '../types/movie.types';
import { ApiResponse } from '../types/response.types';

export const getMoviesBySearch = async (search: string, page: number): Promise<ApiResponse<MoviesResponse>> => {
  const response = await fetch(`${config.backendBaseUrl}/movies?search=${search}&page=${page}`);

  if (!response.ok) {
    throw new Error('Someting went wrong. ' + response.json());
  }

  return response.json();
};
