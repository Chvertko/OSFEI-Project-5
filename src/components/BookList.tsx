import React, { useEffect, useState } from 'react';
import { BookListProps,  Volume } from '../TS';
import BookCard from '../entites/UI/BookCard/BookCard';


export const BookList = ({ data, isError, isLoading, isFetching}: BookListProps) => {
  useEffect(() => {
  },[data])
  if (isError) {
    return <div>{isError}</div>;
  }
  console.log(data)
  return (
    <>
    
    <ul style={{display:"flex",maxWidth:'100%',flexWrap:'wrap', gap:'30px',justifyContent:'center',alignItems:'center'}}>
      {data.map((book: Volume) => (
        <>
        <BookCard key={book.id}  book={book} ></BookCard>
        
        </>
      ))}
    </ul>
    </>
  );
};
