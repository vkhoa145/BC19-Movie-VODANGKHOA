import {configureStore} from '@reduxjs/toolkit';
import bannerSlice from './modules/Home/slices/bannerSlice'
import movieSlice from './modules/Home/slices/movieShowing'
import authSlice from './modules/Auth/slices/authSlice'
const store = configureStore({
    reducer:{
        banner: bannerSlice,
        movie: movieSlice,
        auth: authSlice,
    },
});

export default store;