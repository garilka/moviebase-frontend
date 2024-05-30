import {
  Card,
  CardContent,
  CardContentProps,
  CardMedia,
  CardMediaProps,
  CardProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { styled } from '@mui/system';

export const MovieCardContainer = styled(Card)<CardProps>(() => ({
  width: '20rem',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.8rem',
  marginBottom: '0.5rem',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
}));

export const MovieCardMedia = styled(CardMedia)<CardMediaProps>(() => ({
  height: '16rem',
}));

export const MovieCardContent = styled(CardContent)<CardContentProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));

export const Title = styled(Typography)<TypographyProps>(() => ({
  ontWeight: 'bold',
  textAlign: 'left',
  marginBottom: '0.5rem',
}));

export const OriginalTitle = styled('span')(() => ({
  fontSize: '0.8rem',
  marginLeft: '0.5rem',
}));

export const ReleaseDate = styled(Typography)<TypographyProps>(() => ({
  textAlign: 'left',
  fontSize: '1rem',
  marginBottom: '0.2rem',
}));

export const Overview = styled(Typography)<TypographyProps>(() => ({
  fontSize: '0.8rem',
  textAlign: 'justify',
}));

export const VoteContainer = styled(Stack)<StackProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: '#ef476f',
  marginTop: '0.5rem',
  gap: '0.2rem',
}));

export const VoteValue = styled(Typography)<CardMediaProps>(() => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
}));

export const VoteMax = styled(Typography)<CardMediaProps>(() => ({
  fontSize: '0.8rem',
  fontWeight: 'bold',
}));
