import React from 'react'
import {  Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../context/LoginProvider'

const PrivateRouteLogin = ({component: Component, ...rest}) => {

    const { login } = React.useContext(LoginContext)
    return (
        
        <Route {...rest}>
            {login ? <Redirect to='/'/> : <Component />  }
        </Route>
        
    )
}

export default PrivateRouteLogin
