import { Button } from '@mui/material';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const OutlinedButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {label}
    </Button>
  );
};
