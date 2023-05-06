import { createSlice } from "@reduxjs/toolkit";

export const bookDetailSlice = createSlice({
    name:'bookDetail',
    initialState: {
        id:''
    },
    reducers:{
        showDetails:(state,action) => {
            state.id = action.payload
        }
    }
})

export const {showDetails} = bookDetailSlice.actions
export default bookDetailSlice.reducer