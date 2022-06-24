import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import authApi from '../../apis/auth';



const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

export const register = createAsyncThunk(
    "auth/register",
    async (values) => {
        return await authApi.register(values)
    }

);
export const login = createAsyncThunk(
    "auth/login",
    async (values) => {
        return await authApi.register(values)
    }

);
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [login.pending]:(state) => {
            return {...state,isLoading: true}
        },
        [login.fulfilled]:(state,action) => {
            return {...state,isLoading: false, user: action.payload}
        },
        [login.fulfilled]:(state,action) => {
            return {...state,isLoading: false, error: action.error.message}
        },
        [register.pending]:(state) => {
            return {...state,isLoading: true}
        },
        [register.rejected]:(state,action) => {
            return {...state,isLoading: false, error: action.error.message}
        },
    }
});

export default authSlice.reducer;