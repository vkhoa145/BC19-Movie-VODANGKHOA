import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import * as movieAPI from '../../apis/movie'

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

export const getMovieDetails = createAsyncThunk(
    "movie/getMovieDetails",
    async (movieId) => {
        return await movieAPI.getMovieDetails(movieId);
    }
);

const movieDetailSlice =createSlice({
    name: 'home/movie',
    initialState,
    extraReducers: {
        [getMovieDetails.pending]:(state) => {
            return {...state,isLoading: true}
        },
        [getMovieDetails.fulfilled]:(state,action) => {
            return {...state,isLoading: false, data: action.payload}
        },
        [getMovieDetails.rejected]:(state,action) => {
            return {...state,isLoading: false, error: action.error.message}
        },
    }
});

export default movieDetailSlice.reducer;