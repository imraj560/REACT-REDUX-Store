import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    // name of slice
    name:'user',

    initialState:{

        user:null, //initially before login the user has no login
    },

    //these are basically set of actions
    reducers:{

        loginUser:(state, action) => {

            state.user = action.payload;
        },

        logout:(state) => {

            state.user = null;
        },

    },

})

export const {loginUser, logout} = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;