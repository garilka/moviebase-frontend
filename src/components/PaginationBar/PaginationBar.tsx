import { Pagination } from '@mui/material';
import { useCallback, useState } from 'react';

type PaginationBarProps = {
  page: number;
  onChange: () => void;
};

export const PaginationBar: React.FC<PaginationBarProps> = ({ page = 1, onChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(page);

  const handleChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);

      onChange();
    },
    [onChange],
  );

  return <Pagination count={10} page={currentPage} onChange={handleChange} size="large" color="primary" />;
  // get count from .env or const
};
