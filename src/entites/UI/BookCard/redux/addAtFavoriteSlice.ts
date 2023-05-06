// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { Volume } from "../../../../TS";
// import { useBookId } from "../../../../hooks/useBookId";

// interface FavoriteState {
//   [bookId: string]: boolean
// }

// const initialState: FavoriteState = {};

// export const addAtFavoriteSlice = createSlice({
//   name: "favorite",
//   initialState,
//   reducers: {
//     addFavorite: (state, action: PayloadAction<{ bookId: string; isFavorite: boolean }>) => {
//       const { bookId, isFavorite } = action.payload;
//       state[bookId] = isFavorite;
//     },
//   },
// });

// export default addAtFavoriteSlice.reducer;
// export const { addFavorite } = addAtFavoriteSlice.actions;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Volume, VolumeInfo } from "../../../../TS";

interface RemoveBookDetail{
    id:string|undefined;
};

interface BookFavorite{
    bookFavorite: Volume[]
};

const initialState: BookFavorite = {
    bookFavorite: [], 
};

export const addAtFavoriteSlice = createSlice({
    name: 'addFavoriteBooks',
    initialState,
    reducers:{
        getBookFavorite(state,action:PayloadAction<Volume>){
            state.bookFavorite.push(
                {...action.payload}
            )
        },
        removeBookFavorite(state,action:PayloadAction<RemoveBookDetail>){
            state.bookFavorite = state.bookFavorite.filter(item=>item.id !== action.payload.id)
        },
    },
});

export const {getBookFavorite, removeBookFavorite} = addAtFavoriteSlice.actions;
export default addAtFavoriteSlice.reducer;
