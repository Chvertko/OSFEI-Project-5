import React from 'react';
import { useAppSelector } from '../redux/store';
import { Book } from '../TS/Interfaces/Book';

export const BookList = () => {
  const { error, items, loading } = useAppSelector((state) => state.getBooks);
  console.log(items);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (items.length === 0) {
    return <div>No books found</div>;
  }

  return (
    <ul>
      {items.map((book: Book) => (
        <li >{book.items.volumeInfo.title}</li>
      ))}
    </ul>
  );
};
