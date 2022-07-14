import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as cinemaAPI from '../../apis/cinemaAPI';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
    heThongRapChieu: [],
};

export const getCinema = createAsyncThunk(
    "home/cinema/getCinemas",
    async () => {
        return await cinemaAPI.getCinema();
    }
);

export const getCinemaSchedule = createAsyncThunk(
    "home/cinema/getCinemaSchedule",
    async () => {
        return await cinemaAPI.getCinemaSchedule();
    }
);

const cinemaSlice = createSlice({
    name:'home/cinema',
    initialState,
    extraReducers: {
        [getCinema.pending]:(state) => {
            return {...state,isLoading: true}
        },
        [getCinema.fulfilled]:(state,action) => {
            return {...state,isLoading: false,data:action.payload}
        },
        [getCinema.rejected]:(state,action) => {
            return {...state,isLoading: false,error:action.message}
        },
        [getCinemaSchedule.pending]:(state) => {
            return {...state,isLoading: true}
        },
        [getCinemaSchedule.fulfilled]:(state,action) => {
            return {...state,isLoading: false,heThongRapChieu:action.payload}
        },
        [getCinemaSchedule.rejected]:(state,action) => {
            return {...state,isLoading: false,error:action.message}
        },
    }
});


export default cinemaSlice.reducer;