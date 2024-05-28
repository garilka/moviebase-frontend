import { useCallback, useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!searchValue || searchValue?.length < 4) return;

    const timeOutId = setTimeout(() => {
      const queryParams = new URLSearchParams(location.search);

      queryParams.set('search', searchValue);
      queryParams.set('page', '1');

      navigate(`?${queryParams.toString()}`);
    }, 500);

    return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;

    setSearchValue(value);
  }, []);

  const handleClick = useCallback(async () => {
    const queryParams = new URLSearchParams(location.search);

    queryParams.set('search', searchValue);
    queryParams.set('page', '1');

    navigate(`?${queryParams.toString()}`);

    onClick(searchValue, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
