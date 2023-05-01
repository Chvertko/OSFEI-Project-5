import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book, GOOGLE_BOOKS_API_KEY } from "../../TS";

export const getBooksApi = createApi({
  reducerPath: 'getBooksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints: (builder) => ({
    searchBooks: builder.query<Book[], string>({
      query: (query) => `volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`,
    }),
  }),
});

export type BooksApi = typeof getBooksApi;
export default getBooksApi.reducer;
  