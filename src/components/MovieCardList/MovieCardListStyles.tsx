import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/system';

export const MovieCardListContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  height: '70vh',
  gap: '2rem',
  overflowY: 'auto',
}));
