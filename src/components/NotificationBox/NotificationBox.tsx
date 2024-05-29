import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { CircularProgress, Typography } from '@mui/material';
import * as S from './NotificationBoxStyles';

type NotificationBoxProps = {
  message?: string;
  isLoading: boolean;
  isError: boolean;
};

export const NotificationBox: React.FC<NotificationBoxProps> = ({ message, isLoading, isError }) => {
  return (
    <S.NotificationBoxContainer>
      {isLoading ? (
        <>
          <CircularProgress size={20} />
          <Typography>{'Loading...'}</Typography>
        </>
      ) : isError ? (
        <>
          <ErrorIcon style={{ color: 'red' }} />
          <Typography style={{ color: 'red' }}>{'Some error occured, please try again later'}</Typography>
        </>
      ) : (
        <>
          <InfoIcon />
          <Typography>{message}</Typography>
        </>
      )}
    </S.NotificationBoxContainer>
  );
};
