import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

const MovieDetails = () => {
  const {movieId} = useParams();
  useEffect(()=>{
    // dùng movieId để dispatch action để lấy chi tiết phim 
    
  },[])
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails