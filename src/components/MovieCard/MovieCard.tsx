import { Card, CardContent, CardMedia, Typography } from '@mui/material';

type MovieCardProps = {
  title: string;
  overview: string;
  releaseDate: number;
  imageUrl: string;
};

export const MovieCard: React.FC<MovieCardProps> = ({ title, releaseDate, overview, imageUrl }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt={`${title} cover image`} />
      <CardContent>
        <Typography variant="h5" component="div">
          Title: {title}
        </Typography>
        <Typography sx={{ fontSize: '1rem' }} color="text.secondary" gutterBottom>
          Overview: {overview}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Release date: {releaseDate}
        </Typography>
        <Typography variant="body2">
          {imageUrl}
          <br />
          {'"image url"'}
        </Typography>
      </CardContent>
    </Card>
  );
};
