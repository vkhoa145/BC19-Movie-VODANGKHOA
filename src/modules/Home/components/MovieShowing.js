import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { getMovieShowing } from '../slices/movieShowing';
import {useNavigate} from 'react-router-dom'
const MovieShowing = () => {
  const {data,isLoading, error} = useSelector(state => state.movie);
  const dispatch = useDispatch();
  const navgate = useNavigate()
  useEffect(()=>{
    dispatch(getMovieShowing())
  },[]);
  console.log(data)
  return (
    <div>
      {data.map(movie => {
        return (
          <div className="d-flex my-4">
            <p>{movie.tenPhim}</p>
            <button className="mx-4" onClick={()=>navgate(`/movies/${movie.maPhim}`)}>Detail</button>
          </div>
        )
      })}
    </div>
  )
}

export default MovieShowing