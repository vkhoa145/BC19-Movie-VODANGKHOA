import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';

import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import './Checkout.css';
import { getTicketDetail, postTicketCheckout, selectSeat } from '../slices/ticketSlice';
import { userDetail } from '../../Auth/slices/authSlice'

import { Tabs } from 'antd';
import moment from 'moment';
import Loading from '../../../Loading/Loading';
const CheckOut = () => {
  const { user } = useSelector(state => state.auth);
  const { data, seat, checkoutTicket, isLoading } = useSelector(state => state.ticket);
  console.log(seat)
  const { maLichChieu } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTicketDetail(maLichChieu))

  }, []);
  const handleCheckout = () => {
    checkoutTicket.maLichChieu = maLichChieu;
    checkoutTicket.danhSachVe = seat;
    console.log(checkoutTicket)
    dispatch(postTicketCheckout(checkoutTicket))
  }

  const { thongTinPhim, danhSachGhe } = data;
  if(isLoading) {
    return <Loading/>
  }


  const renderSeat = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let indexGheDangDat = seat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      let classGheDangDat = '';
      let classGheDuocDat = '';
      if (indexGheDangDat !== -1) {
        classGheDaDat = 'gheDangDat';
      };
      if (user.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDuocDat = 'gheDuocDat'
      }
      return (

        <Fragment key={index}>
          {/* Cach 1 */}
          {/* {ghe.loaiGhe === "Vip" ? <button className={`${style['ghe']} ${style['gheVip']}`} key={index}>{ghe.stt}</button> : <button className={`${style['ghe']}`} key={index}>{ghe.stt}</button>}
            {(index + 1)%16 === 0 ? <br/>: ''} */}
          <button onClick={() => dispatch(selectSeat(ghe))} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDuocDat}`} >
            {ghe.daDat ? classGheDuocDat !== '' ? <UserOutlined /> : <CloseOutlined /> : ghe.stt}
          </button>
        </Fragment>
      )
    })
  }
  return (
    <div className="container d-flex ">
      <div className="container">
        <div>
          {renderSeat()}
        </div>
        <div>
          <div className="mt-5 d-flex">
            <table>
              <thead>
                <tr>
                  <th>Ghe chua dat</th>
                  <th>Ghe dang chon</th>
                  <th>Ghe vip</th>
                  <th>Ghe da dat</th>


                  <th>Ghe da thanh toan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button className="ghe text-center">00</button>
                  </td>
                  <td>
                    <button className="ghe text-center gheDangDat">00</button>
                  </td>
                  <td>
                    <button className="ghe text-center gheVip">00</button>
                  </td>
                  <td>
                    <button className="ghe text-center gheDaDat"><CloseOutlined /></button>
                  </td>
                  <td>
                    <button className="ghe text-center gheDuocDat"><UserOutlined /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="rap">Rap phim</div>
      <div className="ve">
        <h3 className="text-center text-primary">
          {seat.reduce((total, ghe, index) => {
            return total += ghe.giaVe

          }, 0)}
        </h3>
        <h3 className="text-danger">{thongTinPhim?.tenPhim}</h3>
        <p>{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}</p>
        <p>{thongTinPhim?.ngayChieu}</p>
        <div className="d-flex">
          <div>
            <span>Ghe</span>
            {seat.map((gheDD, index) => {
              return (
                <span key={index} className="text-primary px-1">{gheDD.stt}</span>
              )
            })}
          </div>
          <div>
            <span className="text-danger px-1">
              {seat.reduce((total, ghe, index) => {
                return total += ghe.giaVe

              }, 0)}
            </span>
          </div>
        </div>
        <div>
          <p>Ho ten: {user.hoTen}</p>
          <p>Email: {user.email}</p>
        </div>
        <div>
          <button onClick={handleCheckout}>Dat ve</button>
        </div>
      </div>
    </div>
  )
}




const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};
export default function (props) {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Chon ghe" key="1">
          <CheckOut {...props} />
        </TabPane>
        <TabPane tab="Ket qua dat ve" key="2">
          <TicketDetail {...props} />
        </TabPane>

      </Tabs>
    </div>
  )
};

function TicketDetail(props) {
  const { user } = useSelector(state => state.auth);
  const { userInfo } = useSelector(state => state.auth);

  const dispatch = useDispatch()
  console.log( userInfo)
  useEffect(() => {
    dispatch(userDetail())
  }, [])
  const renderTicketDetail = () => {
    return userInfo.thongTinDatVe?.map((ticket, index) => {
      return (
        <div key={index}>
          <div className="movie-pic">
            <img src={ticket.hinhAnh} />
          </div>
          <div className="movie-ticket">
            <h3 >ten phim: {ticket.tenPhim}</h3>
            <div className="ticket-checkout">
              <p>Rap phim: {ticket.danhSachGhe[0].tenHeThongRap} - Rap: {ticket.danhSachGhe[0].tenCumRap}</p>
              <p>ngay dat: {moment(ticket.ngayDat).format('hh:mm A - DD-MM-YYYY')}</p>
              <div>
                <h3>So ghe:</h3>
                {ticket.danhSachGhe?.map((ghe,index)=>{
                return (
                  <span key={index}>{ghe.tenGhe}</span>
                )
              })}
              </div>
              <p>Tong tien: 45000</p>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="container">
      <h1>Ket qua dat ve</h1>
      <div className="ticket-detail d-flex p-5">
        {renderTicketDetail()}
      </div>
    </div>
  )
}

