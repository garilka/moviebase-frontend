import { isEmpty } from 'lodash';
import { MovieCard } from '../MovieCard/MovieCard';
import * as S from './MovieCardListStyles';

type MovieCardListProps = {
  movies: any[];
};

export const MovieCardList: React.FC<MovieCardListProps> = ({ movies }) => {
  return (
    <S.MovieCardListContainer>
      {!isEmpty(movies) ? movies.map((movie, index) => <MovieCard key={index} {...movie} />) : 'No movies found'}
    </S.MovieCardListContainer>
  );
};
