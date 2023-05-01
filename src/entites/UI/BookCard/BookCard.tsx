import * as React from 'react';
import { Box, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { BookCardProps } from '../../../TS'
import { BookCardRoot } from './style';


export const BookCard: React.FC<BookCardProps> = ({
  title,
  subtitle,
  thumbnail,
  searchInfo,
  isFavorite,
  onFavoriteClick,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BookCardRoot>
        <CardActionArea>
          {thumbnail && <CardMedia component="img" height="300" image={thumbnail} alt={title} />}
          <CardContent>
            <Typography variant="subtitle1">{title}</Typography>
            {subtitle && <Typography variant="subtitle2">{subtitle}</Typography>}
            {searchInfo && <Typography variant="body2">{searchInfo}</Typography>}
          </CardContent>
        </CardActionArea>
        <Box sx={{ p: 2 }}>
          {onFavoriteClick && <Typography variant="body2">{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</Typography>}
        </Box>
      </BookCardRoot>
    </Box>
  );
};

export default BookCard;
