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
};
export const getCinemaSchedule = () => {
    return axiosclient.get('QuanLyRap/LayThongTinLichChieuHeThongRap',{
        params: {
            maNhom: 'GP01',
        }
    })
};


export const getScheduleMovie = (maPhim) => {
    return axiosclient.get('QuanLyRap/LayThongTinLichChieuPhim',{
        params :{
            maPhim: maPhim
        }
    })
}