import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import * as S from './SearchBarStyles';

type SearchBarProps = {
  onClick?: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
  const query = useQuery();
  const location = useLocation();
  const navigate = useNavigate();

  const initialSearchValue = query.get('search') ?? '';
  const [searchValue, setSearchValue] = useState<string>(initialSearchValue);

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = event.target.value;

      setSearchValue(value);

      const queryParams = new URLSearchParams(location.search);
      queryParams.set('search', value);
      navigate(`?${queryParams.toString()}`);
    },
    [location.search, navigate],
  );

  return (
    <S.SearchBarContainer>
      <S.SearchTextField fullWidth value={searchValue} onChange={handleChange} placeholder="Search for some movie" />
      <S.SearchButton variant="outlined" onClick={onClick}>
        Search
      </S.SearchButton>
    </S.SearchBarContainer>
  );
};
