import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { LoginContext } from '../context/LoginProvider'
import { withRouter } from 'react-router'

const Navbar = (props) => {

    const { login, changeLogin } = React.useContext(LoginContext)

    const cerrarSesion = ()=> {
        changeLogin(false)
        
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>Alkemy</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link active" to='/'>Home</NavLink>
                    </li>
                    
                    
                    
                        
                    {
                            login === true ? (

                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/create-form"
                                        >
                                            Create post
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to='/login'
                                                onClick={()=>cerrarSesion()}
                                                >Sign off
                                            </Link>
                                    </li>                                
                                </>
                            ) : (
                                <li className="nav-item">
                                        <NavLink
                                            className="nav-link" to="/login">Login</NavLink>
                                </li>
                                    
                         )
                    }

                    
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
