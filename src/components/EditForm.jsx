import React from 'react'
import { useParams, withRouter } from 'react-router'
import { LoginContext } from '../context/LoginProvider'

//import { InfoContext } from '../context/InfoProvider'

const EditForm = (props) => {

    const { login } = React.useContext(LoginContext)

    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')
    const [error, setError] = React.useState(null)
    const [formEnviado, setFormEnviado] = React.useState(false)
    //const { infoEdit } = React.useContext(InfoContext)
    const { id } = useParams()

    React.useEffect(() => {

        if (!login) {
            props.history.push('/login')
            return
        }
        
         
        try {
            const getData = async() => {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const res = await data.json()
                setTitle(res.title)
                setBody(res.body)
            }
            getData()
            
        } catch (error) {
            console.log(error)
        }
        
    }, [id, props.history, login])


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
        setFormEnviado(true)
        setTimeout(() => {
            setFormEnviado(false)
        }, 3000);
        setError(null)
        
    }
    

    return (

        <div className="container">
            <h1 className='text-center'>Edit form</h1>
            <hr />
            
            <form onSubmit={processData}>
                {
                    error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )
                }
                        <input
                            type="text"
                            className='form-control mb-2'
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            className='form-control mb-2'
                            onChange={e => setBody(e.target.value)}
                            value={body}
                        />
                        <button
                            className="btn btn-warning w-100" type='submit'
                        >
                            Editar
                        </button>
                
                {
                    formEnviado && (
                        <div className="alert alert-success mt-2">
                            Edición realizada con éxito
                        </div>
                    )  
                }     
                    </form>
                
        </div>
    )
}

export default withRouter(EditForm)
