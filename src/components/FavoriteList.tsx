
import {  useAppSelector } from "../redux/store";
import BookCard from "../entites/UI/BookCard/BookCard";
import { Typography, Box } from "@mui/material";


export const FavoriteList = () => {
    
    const favoriteBookList = useAppSelector(state => state.addfavorite.bookFavorite)
    return(
        <Box sx={{display:'flex',gap:'30px', flexWrap:'wrap' ,padding:'20px'}}>
        {
        favoriteBookList 
        ? favoriteBookList.map((book) => (<BookCard book={book} key={book.id}/>))
        : <Typography variant="body2">Have no favorite Books</Typography>
        }
        </Box>
    )
}