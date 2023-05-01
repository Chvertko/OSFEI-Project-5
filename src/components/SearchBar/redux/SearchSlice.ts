import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { Response } from '../../../TS';
import { getBooksApi } from '../../../entites/api/getBooks';

interface BooksState {
  loading: boolean;
  items: Response['items'] | [];
  error: string | null;
}

const initialState: BooksState = {
  loading: false,
  items:[],
  error: null,
};
export const searchBooks = createAsyncThunk(
  'books/searchBooks',
  async (query: string) => {
    const  response = useSearchBooksQuery(query)
    const data =  response.data;
    return data
  }
);

const getBooksSlice = createSlice({
  name: 'getBooks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchBooks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchBooks.fulfilled, (state, action) => {
       state.loading = false;
       state.items = action.payload;
    });      
    builder.addCase(searchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to search books';
    });
  },
});

export default getBooksSlice.reducer;

export const useSearchBooksQuery = getBooksApi.useSearchBooksQuery;
