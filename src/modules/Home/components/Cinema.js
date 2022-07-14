import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCinema, getCinemaSchedule } from '../slices/cinemaSlice';
import { Radio, Space, Tabs } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router';


const { TabPane } = Tabs;
const Cinema = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, heThongRapChieu } = useSelector(state => state.cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaSchedule())
  }, []);
  console.log(heThongRapChieu)
  const [tabPosition, setTabPosition] = useState('left');

  // const changeTabPosition = (e) => {
  //   setTabPosition(e.target.value);
  // };
  const renderHeThongRap = () => {
    
    return heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane key={index} tab={<img src={heThongRap.logo} alt={heThongRap.tenHeThongRap} style={{ width: '50px', height: '50px' }} />} key="1">
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane key={index} tab={
                  <div>
                    <img src={cumRap.hinhAnh} alt={cumRap.tenCumRap} style={{ width: '40px', height: '40px' }} />
                    <span>{cumRap.tenCumRap}</span>
                  </div>
                }>
                  {cumRap.danhSachPhim?.map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5" style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <img width={100} height={100} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e)=>{
                              e.target.onError = null; e.target.src = 'https://picsum.photos/200'
                            }}/>
                            <div className="m-2">
                              <h3>{phim.tenPhim}</h3>
                              <p>{cumRap.diaChi}</p>
                              {phim.lstLichChieuTheoPhim?.slice(0,8).map((lichChieu,index)=>{
                                return (
                                  <button onClick={()=>navigate(`/checkout/${lichChieu.maLichChieu}`)} key={index} className="m-2 bg-success">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                                )
                              })}
                            </div>
                          </div>

                        </div>
                        <hr />
                      </Fragment>


                    )
                  })}
                </TabPane>
              )
            })}
          </Tabs>
        </TabPane>
      )
    })
  }
  return (
    <>

      <Tabs tabPosition={tabPosition}>

        {renderHeThongRap()}
      </Tabs>
    </>
  );
}

export default Cinema

