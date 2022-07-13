import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBanner } from '../slices/bannerSlice';
import { Carousel } from 'antd'
const Banner = () => {
  const { data, isLoading, error } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanner())
  }, []);
  console.log(data)
  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    
  };
  return (
    <div style>
      <Carousel autoplay>
      {data.map((banner,index)=>{
        return (
          <div key={index}>
            <img style={{...contentStyle,backgroundImage:`url(${banner.hinhAnh})`}} src={banner.hinhAnh} className="w-100 h-100 opacity-0"/>
          </div>
        )
      })}
      
    </Carousel>
    </div>
  )
}
export default Banner;


