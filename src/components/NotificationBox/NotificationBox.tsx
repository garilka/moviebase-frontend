import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import * as S from './NotificationBoxStyles';

type NotificationBoxProps = {
  info?: string;
};

export const NotificationBox: React.FC<NotificationBoxProps> = ({ info }) => {
  return (
    <S.NotificationBoxContainer>
      <InfoIcon />
      <Typography>{info}</Typography>
    </S.NotificationBoxContainer>
  );
};
