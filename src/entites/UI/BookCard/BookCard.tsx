import * as React from 'react';
import { Box, Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Volume, VolumeInfo } from '../../../TS'
import { BookCardRoot } from './style';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { showDetails } from '../../../pages/BookDetailPage/redux/bookDetailSlice';
import { Link } from "react-router-dom";
import { getBookFavorite, removeBookFavorite } from './redux/addAtFavoriteSlice';
interface BookItemProps{
  book: Volume;
}
export const BookCard: React.FC<BookItemProps> = ({book}) => {
  const bookImg = require('./assets/open-book.png')
  const dispatch = useAppDispatch()
  const itemId = useAppSelector(state => state.bookDetail.id)
  const itemsFavorite = useAppSelector(state => state.addfavorite)
  const existingFavoriteBook = itemsFavorite.bookFavorite.find((item)=>(item.id === book.id));
  const handleClick = () => {
    dispatch(showDetails(itemId))
  }
  return (
    <Box sx={{ cursor:'pointer'}} onClick={handleClick}>
      <BookCardRoot>
        <Link to={`/bookDetail/${book.id}`} style={{color:'black', textDecoration:'none'}}>
          <CardActionArea>
            {book.volumeInfo.imageLinks
            ? <CardMedia component="img" sx={{maxWidth:138, height: 192, alignItems: 'center',marginTop:2, marginLeft: 'auto', marginRight: 'auto'}}  image={book.volumeInfo.imageLinks?.thumbnail } alt={book.volumeInfo.title} />
            : <img src={String(bookImg)} width="130px" height="170px" alt={book.volumeInfo.title} />
            }
          </CardActionArea>
            <CardContent>
              <Typography variant="subtitle1">{book.volumeInfo.title}</Typography>
              {book.volumeInfo.subtitle && <Typography variant="subtitle2">{book.volumeInfo.subtitle}</Typography>}
              {book.volumeInfo.publisher && <Typography variant="body2">{book.volumeInfo.publisher}</Typography>}
              {book.volumeInfo.authors && book.volumeInfo.authors.map((author) => <Typography  sx={{color:'blue', textDecoration:'underline'}} variant="body2">{author}</Typography>)}
            </CardContent>
        </Link>
          <CardActions>
            {
              existingFavoriteBook ? <Button onClick={() => {dispatch(removeBookFavorite({id:book.id}))}}><FavoriteIcon /> Remove from favorites</Button>  
              : <Button onClick={()=>{dispatch(getBookFavorite(book!))}}><FavoriteBorderIcon /> Add at favorites</Button> 
            }
          </CardActions>
      </BookCardRoot>
    </Box>
  );
};

export default BookCard;
