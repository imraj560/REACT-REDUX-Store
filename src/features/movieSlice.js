import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    movies:[],
}

export const movieSlice = createSlice({

    name:"movies",
    initialState,

    // reducers are basically actions which we dispatch using usedispatch

    reducers:{

        addMovies:(state, { payload }) => {

            state.movies = payload;
        },
    },

});

// we will use this to dispatch action to load up movies
export const {addMovies} = movieSlice.actions;

//we will use this to select and display movies when it has been loaded
export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
