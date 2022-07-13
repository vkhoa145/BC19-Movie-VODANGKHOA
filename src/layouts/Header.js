import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-grey opacity-25" >
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a onClick={()=>navigate('/')} className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a onClick={()=>navigate('/contact')} className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={()=>navigate('/news')} className="nav-link" href="#">News</a>
                    </li>
                    
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
                </div>
            </div>
        </nav>

    )
}

export default Header