import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Book } from '../../TS/index'

export const bookDetailsApi = createApi({
  reducerPath: 'bookDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints: (builder) => ({
    getBookDetails: builder.query<Book, string>({
      query: (bookId) => `volumes/${bookId}`,
    }),
  }),
})
export default bookDetailsApi.reducer;