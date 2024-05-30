import { Stack, StackProps } from '@mui/material';
import { styled } from '@mui/system';

export const AppHeaderContainer = styled(Stack)<StackProps>(() => ({
  alignItems: 'flex-start',
  gap: '1rem',
  width: '100%',
  maxWidth: '46rem',
}));
