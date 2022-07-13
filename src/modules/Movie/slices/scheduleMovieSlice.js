import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as cinemaAPI from '../../apis/cinemaAPI'


const initialState = {
    data: [],
    isLoading: false    ,
    error: null,
};

export const getScheduleMovie = createAsyncThunk(
    'movie/getScheduleMovie',
    async (movieId) => {
        return await cinemaAPI.getScheduleMovie(movieId);
        
    }
)

const scheduleSlice = createSlice({
    name:'movie/schedule',
    initialState,
    extraReducers: {
        [getScheduleMovie.pending]:(state) => {
            return {...state,isLoading: true}
        },
        [getScheduleMovie.fulfilled]:(state,action) => {
            return {...state,isLoading: false,data:action.payload}
        },
        [getScheduleMovie.rejected]:(state,action) => {
            return {...state,isLoading: false,error:action.message}
        },
    }
});


export default scheduleSlice.reducer;