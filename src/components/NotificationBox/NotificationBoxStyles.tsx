import { Stack, StackProps } from '@mui/material';
import { styled } from '@mui/system';

export const NotificationBoxContainer = styled(Stack)<StackProps>(() => ({
  flexDirection: 'row',
  gap: '0.5rem',
  color: '#1976d2',
}));
