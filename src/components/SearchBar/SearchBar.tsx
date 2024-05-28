import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import * as S from './SearchBarStyles';

type SearchBarProps = {
  onClick: (search: string, page: number) => Promise<void>;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
  const query = useQuery();
  const location = useLocation();
  const navigate = useNavigate();

  const page = query.get('page') !== null ? Number(query.get('page')) : 1;
  const initialSearchValue = query.get('search') ?? '';

  const [searchValue, setSearchValue] = useState<string>(initialSearchValue);

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = event.target.value;

      setSearchValue(value);

      const queryParams = new URLSearchParams(location.search);

      queryParams.set('search', value);
      queryParams.set('page', '1');

      navigate(`?${queryParams.toString()}`);
    },
    [location.search, navigate],
  );

  const handleClick = useCallback(async () => {
    onClick(searchValue, page);
  }, [onClick, page, searchValue]);

  return (
    <S.SearchBarContainer>
      <S.SearchTextField fullWidth value={searchValue} onChange={handleChange} placeholder="Search for some movie" />
      <S.SearchButton variant="outlined" onClick={handleClick}>
        Search
      </S.SearchButton>
    </S.SearchBarContainer>
  );
};
