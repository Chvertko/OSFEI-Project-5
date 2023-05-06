import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response, SearchState, Volume} from "../../../TS";


const initialState: SearchState = {
  loading: false,
  error: null,
  items: undefined,
  q: ''
};

export const searchSlice  = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.loading = false;
      state.error = null;
      state.items = [];
    },
    saveQueryString: (state, action) => {
      state.q = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? "Failed to search books";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action: PayloadAction<Response>) => {
          state.loading = false;
          state.items = action.payload.items?.map((volume: Volume) => ({
            id: volume.id,
            volumeInfo: {
              title: volume.volumeInfo.title,
              authors: volume.volumeInfo.authors || [],
              publisher: volume.volumeInfo.publisher || "",
              publishedDate: volume.volumeInfo.publishedDate || "",
              description: volume.volumeInfo.description || "",
              imageLinks: {
                thumbnail: volume.volumeInfo.imageLinks?.thumbnail || "",
                smallThumbnail: volume.volumeInfo.imageLinks?.smallThumbnail || "",
              },
            },
          })) || [];
        }
      );
  },
});
export const {saveQueryString} = searchSlice.actions
export default searchSlice.reducer