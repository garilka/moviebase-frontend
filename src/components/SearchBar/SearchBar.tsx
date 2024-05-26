import { useCallback, useState } from 'react';
import * as S from './SearchBarStyles';

type SearchBarProps = {
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange, onClick }) => {
  const [searchValue, setSearchValue] = useState<string>(value);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSearchValue(event.target.value);

      onChange && onChange();
    },
    [onChange],
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
