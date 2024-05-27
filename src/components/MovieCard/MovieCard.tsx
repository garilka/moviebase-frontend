import StarIcon from '@mui/icons-material/Star';
import * as S from './MovieCardStyles';

type MovieCardProps = {
  title: string;
  originalTitle: string;
  overview: string;
  releaseDate: number;
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
      <S.MovieCardMedia component="img" image={posterUrl} />
      <S.MovieCardContent>
        <div>
          <S.Title variant="h5">
            <span>{title}</span>
            <S.OriginalTitle>({originalTitle})</S.OriginalTitle>
          </S.Title>
          <S.ReleaseDate color="text.secondary">Release date - {releaseDate}</S.ReleaseDate>
          <S.Overview color="text.secondary">{overview}</S.Overview>
        </div>
        <S.VoteContainer>
          <StarIcon />
          <S.VoteValue>{voteAverage}</S.VoteValue>
          <S.VoteMax> / 10</S.VoteMax>
        </S.VoteContainer>
      </S.MovieCardContent>
    </S.MovieCardContainer>
  );
};
