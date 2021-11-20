import React from 'react'

export const LoginContext = React.createContext()

const LoginProvider = (props) => {

    const [login, setLogin] = React.useState(false)

    React.useEffect(() => {

        
        
        if (localStorage.getItem('loginValue')) {
            const loginValue = JSON.parse(localStorage.getItem('loginValue'))
            setLogin(loginValue)
        }

        

    }, [login])

   

    const changeLogin = value => {
        setLogin(value)
        localStorage.setItem('loginValue', JSON.stringify(value))
    }


    return (
        <LoginContext.Provider value={{login, changeLogin}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
