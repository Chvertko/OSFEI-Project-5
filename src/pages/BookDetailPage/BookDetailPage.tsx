import React from "react"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../redux/store";
import { useBookId } from "../../hooks/useBookId";
import { Button, Skeleton, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import BookCard from "../../entites/UI/BookCard/BookCard";
import { DetailedBookCard } from "../../entites/UI/DetailedBookCard/DetailedBookCard";
export const BookDetailPage:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const {data , isError, isLoading} = useBookId(id?`${id}`:'')
    return(
        <>
            {isLoading && <Skeleton variant="rectangular" width={300} height={400} />}
            {isError && <>
                <Typography>Error to load</Typography>
                <Link to='/'>
                    <Button>Go Back</Button>
                </Link>
            </>}
            {data && <>
                <DetailedBookCard key={data.id}/>
            </>}
            <Link to='/'>
                <Button >Come back</Button>
            </Link>
        </>
    )

}