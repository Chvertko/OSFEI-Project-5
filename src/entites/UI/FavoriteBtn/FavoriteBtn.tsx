import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

export const FavoriteBtn = () => {
    const [favorite,setFavorite] = useState(false)
    const handleFavoriteClick = () => {
        setFavorite(!favorite);
      };
    return (
        <Button
        onClick={handleFavoriteClick} 
        >
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
    )
}
