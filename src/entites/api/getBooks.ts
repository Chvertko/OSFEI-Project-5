import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GOOGLE_BOOKS_API_KEY, Response, Volume } from "../../TS";

interface SearchBooksProps{
  query: string
}
export const getBooksApi = createApi({
  reducerPath: 'getbooksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints:(builder) => ({
    searchBooks: builder.query<Response, SearchBooksProps>({
      query: (arg) => ({
        url: `volumes?q=${arg.query}&key=${GOOGLE_BOOKS_API_KEY}&maxResults=16`,
      }),
      
    }),
    getBooksId: builder.query<Volume,string>({
      query:(id) => ({
        url:`volumes/${id}?&key=${GOOGLE_BOOKS_API_KEY}`,
      })
    })
  })
})
export const {useSearchBooksQuery,useGetBooksIdQuery} = getBooksApi