import React from 'react'
//import { LoginContext } from '../context/LoginProvider'
import {  withRouter } from 'react-router'

const CreateForm = (props) => {

    //const { login } = React.useContext(LoginContext)

    
    const [title, setTitle] = React.useState('')
    const [title2, setTitle2] = React.useState('')
    const [body, setBody] = React.useState('')
    const [body2, setBody2] = React.useState('')
    const [error, setError] = React.useState(null)
    const [formEnviado, setFormEnviado] = React.useState(false)
    const [mensajePostCreado, setMensajePostCreado] = React.useState(false)
    const [id, setId] = React.useState(0)
    

    React.useEffect(() => {
        
        let post = {
            title: title,
            body: body
        }


        try {
            const getData = async() => {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post)
                })
                const res = await data.json()
                setId(res.id)
                
                
            }
            getData()
            
            
        } catch (error) {
            console.log(error)
        }
        


    }, [title, body])

     const processData = (e) => {
        e.preventDefault()
        if (!title.trim()) {
            setError('El título no puede estar vacío')
            return
        }
        if (!body.trim()) {
            setError('La descripción no puede estar vacía')
            return
         }
        setMensajePostCreado(true)
        setFormEnviado(true)
        setTimeout(() => {
            setMensajePostCreado(false)
        }, 3000);
        setTitle2(title)
        setBody2(body)
        setTitle('')
        setBody('')
        setError(null)
        
    }



    return (
        <div className="container">
            <h1 className='text-center mt-4'>Create form</h1>
            <hr />
            
            <form onSubmit={processData}>
                {
                    error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )
                }

                {
                    mensajePostCreado && (
                        <div className="alert alert-success mt-2">
                            Post creation successful
                        </div>
                    )  
                }
                        <input
                            type="text"
                            className='form-control mb-2'
                            onChange={e => setTitle(e.target.value)}
                            placeholder='Enter post title'                    
                            value={title}
                        />
                        <input
                            type="text"
                            className='form-control mb-2'
                            onChange={e => setBody(e.target.value)}
                            placeholder='Enter post description'
                            value={body}
                        />
                        <button
                            className="btn btn-primary w-100" type='submit'
                        >
                            CREATE
                </button>     
                
                </form>
                
                {
                formEnviado && (
                    
                    <div className='mt-4'>
                        <h3 className='text-center'>New post</h3>
                        <ul className="list-group mt-3">
                            <li className="list-group-item">Id: {id}</li>
                            <li className="list-group-item">Title: {title2}</li>
                            <li className="list-group-item">Description: {body2}</li>
                        </ul>
                    </div>
                   ) 
                }
                
                
        </div>
    )
}

export default withRouter(CreateForm)
