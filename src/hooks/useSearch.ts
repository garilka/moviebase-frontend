import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useSearch = (initialSearchValue: string = '') => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>(initialSearchValue);

  useEffect(() => {
    if (!searchValue || searchValue?.length < 3) return;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return {
    searchValue,
    handleChange,
    handleClick,
  };
};
