import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as cinemaAPI from '../../apis/cinemaAPI';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

export const getSchedule = createAsyncThunk(
    "home/banner/getSchedule",
    async () => {
        return await cinemaAPI.getSchedule();
        
    }
);

const scheduleSlice = createSlice({
    name: 'home/schedule',
    initialState,
    extraReducers: {
        [getSchedule.pending]:(state) => {
            return {...state,isLoading:true}
        },
        [getSchedule.pending]:(state,action) => {
            return {...state,isLoading:false,data: action.payload}
        },
        [getSchedule.pending]:(state,action) => {
            return {...state,isLoading:false,error: action.error.message}
        },
    }
});

export default scheduleSlice.reducer;