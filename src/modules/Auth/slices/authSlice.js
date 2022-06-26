import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import authApi from '../../apis/auth';



const initialState = {
    // Kiểm tra nếu localStorage có thông tin user, gán lại cho state user nếu không có thì mặc định là null 
    user: JSON.parse(localStorage.getItem('user')) || null,
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
        const data = await authApi.login(values);
        // luu thong tin dang nhap vao local storage de khong can phai dang nhap lai neu refresh
        localStorage.setItem('user',JSON.stringify(data));
        return data

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
        [login.rejected]:(state,action) => {
            return {...state,isLoading: false, error: action.error.message}
        },
        [register.pending]:(state) => {
            return {...state,isLoading: true}
        },
        [register.fulfilled]:(state) => {
            return {...state,isLoading: false}
        },
        [register.rejected]:(state,action) => {
            return {...state,isLoading: false, error: action.error.message}
        },
    }
});

export default authSlice.reducer;