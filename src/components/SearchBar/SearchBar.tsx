import { useQuery } from '../../hooks/useQuery';
import { useSearch } from '../../hooks/useSearch';
import * as S from './SearchBarStyles';

export const SearchBar: React.FC = () => {
  const query = useQuery();

  const initialSearchValue = query.get('search') ?? 'example';

  const { searchValue, handleChange, handleClick } = useSearch(initialSearchValue);

  return (
    <S.SearchBarContainer>
      <S.SearchTextField fullWidth value={searchValue} onChange={handleChange} placeholder="Search for some movie" />
      <S.SearchButton variant="outlined" onClick={handleClick}>
        Search
      </S.SearchButton>
    </S.SearchBarContainer>
  );
};
