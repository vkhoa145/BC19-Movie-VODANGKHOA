import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getBanner } from '../slices/bannerSlice';
const Banner = () => {
  const {data, isLoading, error} = useSelector((state)=> state.banner);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBanner())
  },[])
  console.log(data)
  return (
    <div>
      Banner
    </div>
  )
}

export default Banner