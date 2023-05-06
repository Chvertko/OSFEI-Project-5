import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { grey} from '@mui/material/colors';
import {useNavigate, useParams} from 'react-router-dom'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useGetBooksIdQuery } from '../../api/getBooks';
import { Button, Grid, Paper} from '@mui/material';
import { getBookFavorite, removeBookFavorite } from '../BookCard/redux/addAtFavoriteSlice';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const  DetailedBookCard:React.FC = () => {
  const navigate =useNavigate()
  const dispatch = useAppDispatch();
  const [showAll, setShowAll] = React.useState(false);
  const favoriteBooks = useAppSelector(state=>state.addfavorite); 
  const {id} = useParams();
  const {data:book, isLoading, isError} = useGetBooksIdQuery(id?`${id}`:'');
  const existingFavoriteBook = favoriteBooks.bookFavorite.find((item)=>(item.id === id));
  
  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  
  return (
    <>
    <Paper style={{ margin: "16px", padding: "16px" }}>
    <Grid container spacing={3}>
        <Grid item xs={3} sm={3} style={{display:'flex', flexDirection:'column'}}>
          <img style={{ maxWidth: "100%" }} src={book?.volumeInfo.imageLinks?.thumbnail.replace('http','https').replace('zoom=1','zoom=2')} alt="movie poster" />
          <Typography variant='body2' >Published date a <br/> <span style={{fontWeight:'bold'}}>{book?.volumeInfo.publishedDate}</span></Typography>
          <Typography variant='body2' >Publishers are a <br/><span style={{fontWeight:'bold'}}>{book?.volumeInfo.publisher}</span> </Typography>
        </Grid>
        <Grid item xs={5} sm={5}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {book?.volumeInfo.title}
          </Typography>
          <Typography variant="subtitle1" style={{ display: "inline-block", padding: "4px", borderRadius: "4px", backgroundColor: "#1976d2", color: "#fff", marginRight: "16px" }}>
            {book?.volumeInfo.subtitle}
          </Typography>
          <Typography variant="subtitle2">{book?.volumeInfo.authors?.join(", ")}</Typography>
          <Typography component="p" variant="body1" style={{ marginTop: "16px" }}>
            {showAll ? book?.volumeInfo.description : book?.volumeInfo.description?.substring(0, 300)}
            {book?.volumeInfo?.description && book.volumeInfo.description.length > 300 && (
              <Button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show less' : 'Show more'}
                <ExpandMore expand={showAll} aria-expanded={showAll} aria-label="show more" />
              </Button>
            )}
          </Typography>

          {
            existingFavoriteBook ? <Button onClick={() => {dispatch(removeBookFavorite({id:id}))}}><FavoriteIcon />Remove from favorites</Button>  
            : <Button onClick={()=>{dispatch(getBookFavorite(book!))}}><FavoriteBorderIcon />Add at favorites</Button> 
          }
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}