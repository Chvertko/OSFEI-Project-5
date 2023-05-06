import { useState } from "react";
import { BookList } from "../components/BookList"
import { useAppSelector } from "../redux/store"
import { useSearchBooks } from "../hooks/useSearch";
import { Backdrop, CircularProgress } from "@mui/material";

export const BookListPage = () => {
    const qe = useAppSelector(state => state.searchApi.q)
    const { data, isError, isLoading, isFetching } = useSearchBooks({query: qe});
    return(
        <>
            { isFetching && <Backdrop open sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}><CircularProgress color="inherit" /></Backdrop> }
            <BookList data={data || []} isError={isError} isLoading={isLoading} isFetching={isFetching}/>
        </>
    )
}