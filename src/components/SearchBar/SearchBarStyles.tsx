import { Button, ButtonProps, Stack, StackProps, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

export const SearchBarContainer = styled(Stack)<StackProps>(() => ({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
}));

export const SearchTextField = styled(TextField)<TextFieldProps>(() => ({
  maxWidth: '40rem',
  '& .MuiOutlinedInput-root': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '& fieldset': {
      borderRight: 'none',
    },
  },
}));

export const SearchButton = styled(Button)<ButtonProps>(() => ({
  minWidth: '6rem',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
}));
