import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../components/FavoriteList"
import { Box, Button} from "@mui/material";
export const FavoriteBooksPage = () => {
    const navigate = useNavigate();
    return(
        <>
            <FavoriteList/>
            <Box>
                <Button size='medium' onClick={() => navigate(-1)}>Come Back</Button>
            </Box>
        </>
    )
}