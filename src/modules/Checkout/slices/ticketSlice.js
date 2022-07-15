
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import ticketAPI from '../../apis/tickets';
import {ThongTinDatVe} from '../../../core/models/ThongTinDatVe'


const initialState = {
    data: [],
    isLoading: false,
    error: false,
    seat: [],
    checkoutTicket: new ThongTinDatVe(),
    tabActive: 1,
};

export const getTicketDetail = createAsyncThunk(
    "checkout/tickets",
    async (maLichChieu) => {
        return await ticketAPI.getTicketDetail(maLichChieu)
    }
);

export const postTicketCheckout = createAsyncThunk(
    "ticket/postTicketList",
    async (value) => {
        return await ticketAPI.postTicketCheckout(value);
    }
);








const ticketSlice = createSlice({
    name:"ticket",
    initialState,
    reducers : {
        selectSeat: (state,action) => {
            
            let demo = [...state.seat]
            let index = demo.findIndex(gheDD => gheDD.maGhe === action.payload.maGhe )
            if(index !== -1) {
                demo.splice(index,1)
            } else {
                demo.push(action.payload)
            }
            
            return {...state,seat:demo}
        },
        switchTab: (state) => {
            
            return {...state,tabActive: 2}
        },
    },
    extraReducers: {
        [getTicketDetail.pending]:(state) => {
            return {...state,isLoading:true}
        },
        [getTicketDetail.fulfilled]:(state,action) => {
            return {...state,isLoading:false,data: action.payload}
        },
        [getTicketDetail.rejected]:(state,error) => {
            return {...state,isLoading:false,error: error.response.message}
        },
        [postTicketCheckout.pending]:(state) => {
            return {...state,isLoading:true}
        },
        [postTicketCheckout.fulfilled]:(state,action) => {
            return {...state,isLoading:false,checkoutTicket: action.payload}
        },
        [postTicketCheckout.rejected]:(state,error) => {
            return {...state,isLoading:false,error: error.response.message}
        },
    }
});


export const {selectSeat,switchTab} = ticketSlice.actions;


export default ticketSlice.reducer;