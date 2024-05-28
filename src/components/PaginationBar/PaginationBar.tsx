import { Pagination } from '@mui/material';
import { isNil } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

export const PaginationBar: React.FC = () => {
  const query = useQuery();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const initalPage = !isNil(query.get('page')) ? Number(query.get('page')) : 1;

    setCurrentPage(initalPage);
  }, [query]);

  const handleChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);

      const queryParams = new URLSearchParams(location.search);

      queryParams.set('page', value.toString());

      navigate(`?${queryParams.toString()}`);
    },
    [location.search, navigate],
  );

  return <Pagination count={10} page={currentPage} onChange={handleChange} size="large" color="primary" />;
};
