import { TextField } from '@mui/material';
import { useCallback, useState } from 'react';

type SearchBarProps = {
  value?: string;
  onChange: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange }) => {
  const [searchValue, setSearchValue] = useState<string>(value);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSearchValue(event.target.value);

      onChange();
    },
    [onChange],
  );

  return <TextField value={searchValue} onChange={handleChange} placeholder="Eg.: Pulp fiction" />;
};
