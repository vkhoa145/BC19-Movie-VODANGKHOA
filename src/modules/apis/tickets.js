
import axiosClient from './axiosClient';

const ticketAPI = {
    getTicketDetail : (maLichChieu) => {
        return axiosClient.get('QuanLyDatVe/LayDanhSachPhongVe',{
            params : {
                maLichChieu: maLichChieu,
            }
        })
    },
    postTicketCheckout : (checkoutTicket) => {
        return axiosClient.post('QuanLyDatVe/DatVe',checkoutTicket)
    }
};

export default ticketAPI;