import axiosClient from './axiosClient'



export const getMovies = () => {
    return axiosClient.get('QuanLyPhim/LayDanhSachPhim',{
        params: {
            maNhom:"GP01",
        }
    })
};

export const getMovieDetails = (movieId) => {
    return axiosClient.get('QuanLyPhim/LayThongTinPhim',{
        params: {
            maPhim: movieId,
        }
    })
};

export const getBanner = () => {
    return axiosClient.get('QuanLyPhim/LayDanhSachBanner')
};
