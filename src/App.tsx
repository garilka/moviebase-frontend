import './App.css';
import { MovieCard } from './components/MovieCard/MovieCard';
import { NotificationBox } from './components/NotificationBox/NotificationBox';
import { OutlinedButton } from './components/OutlinedButton/OutlinedButton';
import { PaginationBar } from './components/PaginationBar/PaginationBar';
import { SearchBar } from './components/SearchBar/SearchBar';

const movieProps = {
  title: 'ize',
  overview: 'ize bize dolgok',
  releaseDate: 2022,
  imageUrl: 'image',
};

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit d<code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
      {/* aria labels */}
      {/* BODY WRAP FOR THESE */}

      <SearchBar onChange={() => {}} />
      <OutlinedButton label="Search" onClick={() => {}} />
      <NotificationBox info="dolgok tortennek" />
      <MovieCard {...movieProps} />
      <PaginationBar page={5} onChange={() => {}} />
    </div>
  );
}

export default App;
