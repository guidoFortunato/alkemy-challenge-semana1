import React from 'react'

export const InfoContext = React.createContext()

const InfoProvider = (props) => {

    const [infoEdit, setInfoEdit] = React.useState({
        title: '',
        body: ''
    })

    return (
        <InfoContext.Provider value={{infoEdit, setInfoEdit}}>
            {props.children}
        </InfoContext.Provider>
    )
}

export default InfoProvider
