import React from 'react';
import { BookListProps,  Volume } from '../TS';

export const BookList = ({ data, isError, isLoading }: BookListProps) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  // if (data.length === 0) {
  //   return <div>No books found</div>;
  // }

  return (
    <ul>
      {data.map((book: Volume) => (
        <li key={book.id} >{book.volumeInfo.title}</li>
      ))}
    </ul>
  );
};
