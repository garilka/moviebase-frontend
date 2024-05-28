import { isNil } from 'lodash';
import { useEffect, useState } from 'react';
import './App.css';
import { getMoviesBySearch } from './api/movies.api';
import { AppHeader } from './components/AppHeader/AppHeader';
import { MovieCardList } from './components/MovieCardList/MovieCardList';
import { PaginationBar } from './components/PaginationBar/PaginationBar';
import { useQuery } from './hooks/useQuery';

function App() {
  const query = useQuery();

  const search = query.get('search') ?? '';
  const page = !isNil(query.get('page')) ? Number(query.get('page')) : 1;

  const [pageCount, setPageCount] = useState();
  const [movies, setMovies] = useState([]);

  const handleGetMovies = async (search: string, page: number) => {
    const { data } = await getMoviesBySearch(search, page);
    const { meta, movies } = data;
    const { pageCount } = meta;

    setPageCount(pageCount);
    setMovies(movies);
  };

  useEffect(() => {
    handleGetMovies(search, page);
  }, [search, page]);

  return (
    <div className="app">
      <main className="main">
        <AppHeader notification="dolgok tortennek" onSearchButtonClick={handleGetMovies} />
        <MovieCardList movies={movies} />
        <PaginationBar pageCount={pageCount} />
      </main>
    </div>
  );
}

export default App;
