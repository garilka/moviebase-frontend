import { Pagination } from '@mui/material';
import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

export const PaginationBar: React.FC = () => {
  const query = useQuery();
  const location = useLocation();
  const navigate = useNavigate();

  const initalPage = query.get('page') !== null ? Number(query.get('page')) : 1;
  const [currentPage, setCurrentPage] = useState<number>(initalPage);

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
  // get count from .env or const
};
