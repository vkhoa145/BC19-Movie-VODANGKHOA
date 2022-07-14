import React from 'react'
import {useNavigate} from 'react-router-dom';

const Film = ({movie}) => {
    const navigate = useNavigate()
    return (
        <div>
            <img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} onError={(e)=>{e.target.onError = null; e.target.src = 'https://picsum.photos/200'}}/>
            <div className="card-body">
                <h5 className="card-title movie-title">{movie.tenPhim}</h5>
                <p className="card-text">{movie.moTa}</p>
                <a href="#" onClick={() => navigate(`/movies/${movie.maPhim}`)} className="btn btn-primary">Details</a>

            </div>
        </div>
    )
}

export default Film