import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieShowing } from '../slices/movieShowing';
import { useNavigate } from 'react-router-dom';

import Film from './Film';

const MovieShowing = () => {
  const { data, isLoading, error } = useSelector(state => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getMovieShowing())
  }, []);
  
  return (
    <div className="container d-flex justify-content-center flex-wrap">
      {data?.map((movie, index) => {
        return (
          <div key={index} className="card rounded mx-2.5 my-5" style={{ width: '18rem' }}>
            <Film movie={movie}/>
          </div>

        )
      })}
    </div>
  )
}

export default MovieShowing

 