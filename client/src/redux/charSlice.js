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
        // addUser: (state, action) => {
        //     const { name, username, email } = action.payload; //esto es lo que me llegaria por payload
        //     //de esta forma cambio el estado
        //     state.name = name;
        //     state.username = username;
        //     state.email = email
        // },
        // //de esta forma modificamos una propiedad
        // changeEmail: (state, action) => {
        //     state.email = action.payload
        // }

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
        fav: (state, action) => {
            state.fav = action.payload
        },
    }
})


export const { getAllChars, getChar_ById, paginate, random, myChars, fav } = charSlice.actions //esto seria como las actions
export default charSlice.reducer