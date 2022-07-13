import axiosclient from './axiosClient';


export const getCinema = () => {
    return axiosclient.get('QuanLyRap/LayThongTinHeThongRap')
};

export const getCinemaInfo = (cumRap) => {
    return axiosclient.get('QuanLyRap/LayThongTinCumRapTheoHeThong',{
        params: {
            maHeThongRap: cumRap,
        }
    })
}

export const getScheduleMovie = (maPhim) => {
    return axiosclient.get('QuanLyRap/LayThongTinLichChieuPhim',{
        params :{
            maPhim: maPhim
        }
    })
}