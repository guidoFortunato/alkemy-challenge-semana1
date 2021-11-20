import React from 'react'
import {  Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../context/LoginProvider'

const PrivateRouteEditForm = ({component: Component, ...rest}) => {

    const { login } = React.useContext(LoginContext)
    return (
        
        <Route {...rest}>
            {login ? <Component /> : <Redirect to='/login'/>  }
        </Route>
        
    )
}

export default PrivateRouteEditForm
