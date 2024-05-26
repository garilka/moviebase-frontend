import InfoIcon from '@mui/icons-material/Info';
import { Stack, Typography } from '@mui/material';

type NotificationBoxProps = {
  info?: string;
};

export const NotificationBox: React.FC<NotificationBoxProps> = ({ info }) => {
  return (
    <Stack direction="row" gap={1}>
      <InfoIcon />
      <Typography>{info}</Typography>
    </Stack>
  );
};
