import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieShowing } from '../slices/movieShowing';
import { useNavigate } from 'react-router-dom';
import MultipleRows from '../../../components/ReactSlick';

const MovieShowing = () => {
  const { data, isLoading, error } = useSelector(state => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getMovieShowing())
  }, []);
  console.log(data)
  return (
    <div className="container d-flex justify-content-center flex-wrap">
      {data?.map((movie, index) => {
        return (
          <div key={index} className="card rounded mx-2.5 my-5" style={{ width: '18rem' }}>
            {/* <img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} />
            <div className="card-body">
              <h5 className="card-title movie-title">{movie.tenPhim}</h5>
              <p className="card-text">{movie.moTa}</p>
              <a href="#" onClick={() => navigate(`/movies/${movie.maPhim}`)} className="btn btn-primary">Details</a>
            <p>hello</p>
            </div> */}
            <MultipleRows movie={movie}/>
          </div>

        )
      })}
    </div>
  )
}

export default MovieShowing

 