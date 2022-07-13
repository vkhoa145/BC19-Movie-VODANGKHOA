import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import * as movieAPI from '../../apis/movie';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

export const getMovieShowing = createAsyncThunk(
    "home/movieShowing/getMovieShowing",
    async () => {
        return await movieAPI.getMovies();
        
    }
);

const movieSlice = createSlice({
    name: "home/movieShowing",
    initialState,
    extraReducers: {
        [getMovieShowing.pending]: (state) => {
            return {...state,isLoading: true}
        },
        [getMovieShowing.fulfilled]: (state,action) => {
            return {...state,isLoading: false,data: action.payload}
        },
        [getMovieShowing.rejected]: (state,action) => {
            return {...state,isLoading: false,error: action.error.message}
        },
    }
});

export default movieSlice.reducer;