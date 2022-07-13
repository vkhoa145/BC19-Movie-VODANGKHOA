import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getCinemaInfo} from '../slices/cinemaSlice'
const Schedule = () => {
    const {data,isLoading,error} = useSelector(state => state.schedule)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCinemaInfo())
    },[])
  return (
    <div>
        {data.map(cumRap => {
            return (
                <div>
                    <p>{cumRap}</p>
                </div>
            )
        })}
    </div>
  ) 
}

export default Schedule