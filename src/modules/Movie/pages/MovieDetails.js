import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from '../slices/movieDetailSlice';
import { Tabs, Radio, Space } from 'antd'
import { getScheduleMovie } from '../slices/scheduleMovieSlice'
import moment from 'moment'
import { hexToRgb } from '@mui/system';
const MovieDetails = (props) => {
  const { TabPane } = Tabs;
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(state => state.schedule);
  const navigate = useNavigate()
  useEffect(() => {
    // dùng movieId để dispatch action để lấy chi tiết phim 
    dispatch(getScheduleMovie(movieId))

  }, [])
  console.log(data)
  return (
    <div className="cotainer">
      <div className="avatar">ten phim:{data.tenPhim} </div>
      <div className="avatar">ngay khoi chieu:{moment(data.ngayKhoiChieu).format('DD - MM - YYYY')} </div>
      <img src={data.hinhAnh} />
      <p>{data.moTa}</p>
      <div className="bg-primary mt-10 px-5 py-5 container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Lịch chiếu" key="1">
            <div>
              <Tabs tabPosition={'left'}>
                {data.heThongRapChieu?.map((rap, index) => {
                  return (
                    <TabPane tab={<div><img src={rap.logo} style={{ width: "50px", height: "50px" }} alt={rap.logo} />{rap.tenHeThongRap}</div>} key={index}>
                        {rap.cumRapChieu?.map((cumRap,index)=>{
                          return (
                            <div key={index} className="container d-flex">
                              <img src={cumRap.hinhAnh} alt={cumRap.tenCumRap} style={{width:"40px",height:"40px"}}/>
                              <div className="cum-rap">
                                <p>{cumRap.tenCumRap}</p>
                                <p>{cumRap.diaChi}</p>
                              </div>
                              <div className="lich-chieu">
                                {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index) => {
                                  return (
                                    <button key={index} onClick={()=>navigate(`/checkout/${lichChieu.maLichChieu}`)}>
                                      {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                    </button>
                                  )
                                })}
                              </div>
                            </div>
                          )

                        })}
                    </TabPane>
                  )
                })}
              </Tabs>
            </div>
          </TabPane>
          <TabPane tab="Thông tin" key="2">
            Thông tin
          </TabPane>
          <TabPane tab="Đánh giá" key="3">
            Đánh giá
          </TabPane>
        </Tabs>
      </div>

    </div>
  )
}

export default MovieDetails