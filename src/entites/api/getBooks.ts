import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GOOGLE_BOOKS_API_KEY, Response, VolumesQueryArg } from "../../TS";


export const getBooksApi = createApi({
  reducerPath: 'getbooksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints:(builder) => ({
    searchBooks: builder.query<Response, VolumesQueryArg>({
       query: (arg) => ({
       url: `volumes?q=${arg.q}&key=${GOOGLE_BOOKS_API_KEY}&maxResults=16`,
      }),
    }),
  })
})
export const {useSearchBooksQuery} = getBooksApi