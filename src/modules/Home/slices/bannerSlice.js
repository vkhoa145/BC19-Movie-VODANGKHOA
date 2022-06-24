import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import * as movieAPI from '../../apis/movie';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};


export const getBanner = createAsyncThunk(
    "home/banner/getBanners",
    async () => {
        return await movieAPI.getBanner();
        
    }
)

const bannerSlice  = createSlice({
    name: 'home/banner',
    initialState,
    extraReducers: {
        [getBanner.pending]: (state) => {
            return {...state,isLoading: true}
        },
        [getBanner.fulfilled]: (state,action) => {
            return {...state,isLoading: false,data: action.payload}
        },
        [getBanner.rejected]: (state,action) => {
            return {...state,isLoading: false,error: action.error.message}
        },
    }
});

export default bannerSlice.reducer;