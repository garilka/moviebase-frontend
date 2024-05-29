import { isNil } from 'lodash';
import './App.css';
import { AppHeader } from './components/AppHeader/AppHeader';
import { MovieCardList } from './components/MovieCardList/MovieCardList';
import { PaginationBar } from './components/PaginationBar/PaginationBar';
import { useGetMoviesBySearch } from './hooks/useGetMoviesBySearch';
import { useQuery } from './hooks/useQuery';

function App() {
  const query = useQuery();

  const search = query.get('search') ?? '';
  const page = !isNil(query.get('page')) ? Number(query.get('page')) : 1;

  const { movies, pageCount, message, isLoading, isError, handleGetMovies } = useGetMoviesBySearch(search, page);

  return (
    <div className="app">
      <main className="main">
        <AppHeader message={message} isLoading={isLoading} isError={isError} onSearchButtonClick={handleGetMovies} />
        <MovieCardList movies={movies} />
        <PaginationBar pageCount={pageCount} />
      </main>
    </div>
  );
}

export default App;
