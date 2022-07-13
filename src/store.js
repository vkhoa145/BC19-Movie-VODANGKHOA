import {configureStore} from '@reduxjs/toolkit';
import bannerSlice from './modules/Home/slices/bannerSlice';
import movieSlice from './modules/Home/slices/movieShowing';
import authSlice from './modules/Auth/slices/authSlice';
import cinemaSlice from './modules/Home/slices/cinemaSlice';
import movieDetailSlice from './modules/Movie/slices/movieDetailSlice';
import scheduleMovieSlice from './modules/Movie/slices/scheduleMovieSlice'
import ticketSlice from './modules/Checkout/slices/ticketSlice';
const store = configureStore({
    reducer:{
        banner: bannerSlice,
        movie: movieSlice,
        auth: authSlice,
        cinema: cinemaSlice,
        movieDetails: movieDetailSlice,
        schedule : scheduleMovieSlice,
        ticket: ticketSlice,
        
    },
});

export default store;