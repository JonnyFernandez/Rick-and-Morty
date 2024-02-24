import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allchars: [],
    backupChar: [],
    detail: [],
    paginate: [],
    random: [],
    myChars: [],
    fav: [],
}


export const charSlice = createSlice({
    name: "char",  //con ste nombre lo llamare desde el useSelector
    initialState,
    reducers: {


        getAllChars: (state, action) => {
            state.allchars = action.payload
            state.backupChar = action.payload
        },
        getChar_ById: (state, action) => {
            state.detail = action.payload
        },
        paginate: (state, action) => {
            state.paginate = action.payload
        },
        random: (state, action) => {
            state.random = action.payload
        },
        myChars: (state, action) => {
            state.myChars = action.payload
        },
        addToFavorites: (state, action) => {
            const existingChar = state.fav.find((char) => char.id === action.payload.id);
            if (!existingChar) {
                state.fav.push(action.payload);
            }
        },
        removeFromFavorites: (state, action) => {
            state.fav = state.fav.filter((char) => char.id !== action.payload);
        },
        setFavItems: (state, action) => {
            state.fav = action.payload
        }
    }
})


export const { getAllChars, getChar_ById, paginate, random, myChars, addToFavorites, removeFromFavorites, setFavItems } = charSlice.actions //esto seria como las actions
export default charSlice.reducer