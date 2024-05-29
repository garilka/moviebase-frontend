import { useEffect, useState } from 'react';
import { getMoviesBySearch } from '../api/movies.api';
import { Movie } from '../types/movie.types';

export const useGetMoviesBySearch = (search: string, page: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState<number>();
  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleGetMovies = async (search: string, page: number) => {
    try {
      if (search === '') return;

      setIsLoading(true);

      const { data, message } = await getMoviesBySearch(search, page);
      const { meta, movies } = data;
      const { pageCount } = meta;

      setMovies(movies);
      setPageCount(pageCount);
      setMessage(message);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetMovies(search, page);
  }, [search, page]);

  return { movies, pageCount, message, isLoading, isError, handleGetMovies };
};
