import StarIcon from '@mui/icons-material/Star';
import { formatDateString } from '../../utils/formatDateString';
import { roundNumberToOneDecimal } from '../../utils/roundNumberToOneDecimal';
import * as S from './MovieCardStyles';

type MovieCardProps = {
  title: string;
  originalTitle: string;
  overview: string;
  releaseDate: string;
  posterUrl: string;
  voteAverage: number;
};

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  originalTitle,
  releaseDate,
  overview,
  posterUrl,
  voteAverage,
}) => {
  return (
    <S.MovieCardContainer>
      <S.MovieCardMedia component="img" image={posterUrl ?? '/movie-reel.png'} />
      <S.MovieCardContent>
        <div>
          <S.Title variant="h5">
            <span>{title}</span>
            {originalTitle && originalTitle !== title && <S.OriginalTitle>({originalTitle})</S.OriginalTitle>}
          </S.Title>
          <S.ReleaseDate color="text.secondary">Release date - {formatDateString(releaseDate)}</S.ReleaseDate>
          <S.Overview color="text.secondary">{overview}</S.Overview>
        </div>
        <S.VoteContainer>
          <StarIcon />
          {voteAverage ? (
            <>
              <S.VoteValue>{roundNumberToOneDecimal(voteAverage)}</S.VoteValue>
              <S.VoteMax> / 10</S.VoteMax>
            </>
          ) : (
            <S.VoteValue>-</S.VoteValue>
          )}
        </S.VoteContainer>
      </S.MovieCardContent>
    </S.MovieCardContainer>
  );
};
