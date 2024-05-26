import './App.css';
import { AppHeader } from './components/AppHeader/AppHeader';
import { MovieCardList } from './components/MovieCardList/MovieCardList';
import { PaginationBar } from './components/PaginationBar/PaginationBar';

const movieProps = {
  title: 'Bungo Stray Dogs: Dead Apple',
  originalTitle: '文豪ストレイドッグス DEAD APPLE',
  overview:
    'A large scale catastrophe is occurring across the planet. Ability users are discovered after the appearance of a mysterious fog, apparently having committed suicide, so the Armed Detective Agency sets out to investigate these mysterious deaths. The case seems to involve an unknown ability user referred to as "Collector," a man who could be the mastermind behind the incident.\r Trust and courage are put to the test in order to save the city of Yokohama and ability users across the world from the grip of Collector where the Armed Detective Agency forms an unlikely partnership with the dangerous Port Mafia.',
  releaseDate: 2011,
  imageUrl: 'https://image.tmdb.org/t/p/w500/vy8dW9kDuXWmdXcsBga3V4i1vtP.jpg',
  voteAverage: 1.5,
};

const movieProps2 = {
  title: 'Bungo Stray Dogs: Dead Apple',
  originalTitle: '文豪ストレイドッグス DEAD APPLE',
  overview:
    'a man who could be the mastermind behind the incident.\r Trust and courage are put to the test in order to save the city of Yokohama and ability users across the world from the grip of Collector where the Armed Detective Agency forms an unlikely partnership with the dangerous Port Mafia.',
  releaseDate: 2011,
  imageUrl: 'https://image.tmdb.org/t/p/w500/vy8dW9kDuXWmdXcsBga3V4i1vtP.jpg',
  voteAverage: 1.5,
};

const movies = [movieProps2, movieProps2, movieProps, movieProps];

function App() {
  return (
    <div className="app">
      <main className="main">
        <AppHeader notification="dolgok tortennek" />
        <MovieCardList movies={movies} />
        <PaginationBar page={1} onChange={() => {}} />
      </main>
    </div>
  );
}

export default App;
