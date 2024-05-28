import { Pagination } from '@mui/material';
import { isNil } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

export const PaginationBar: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const page = !isNil(query.get('page')) ? Number(query.get('page')) : 1;

    setCurrentPage(page);
  }, [query]);

  const handleChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);

      query.set('page', value.toString());

      navigate(`?${query.toString()}`);
    },
    [query, navigate],
  );

  return <Pagination count={10} page={currentPage} onChange={handleChange} size="large" color="primary" />;
};
