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
  const page = query.get('page') !== null ? Number(query.get('page')) : 1;

  const [movies, setMovies] = useState([]);
  const [delayedSearch, setDelayedSearch] = useState<string>(search);

  const handleGetMovies = async (search: string, page: number) => {
    const { data } = await getMoviesBySearch(search, page);
    setMovies(data);
  };

  useEffect(() => {
    if (!search || search?.length < 4) return;

    const timeOutId = setTimeout(() => {
      setDelayedSearch(search);
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [search, page]);

  useEffect(() => {
    if (delayedSearch) {
      handleGetMovies(delayedSearch, page);
    }
  }, [delayedSearch, page]);

  return (
    <div className="app">
      <main className="main">
        <AppHeader
          notification="dolgok tortennek"
          // onSearchButtonClick={handleGetMovies}
        />
        <MovieCardList movies={movies} />
        <PaginationBar />
      </main>
    </div>
  );
}

export default App;
