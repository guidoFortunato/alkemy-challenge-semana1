import React from 'react'
import alkemy from '../img/alkemy.jpg'
import { withRouter } from 'react-router'
import { LoginContext } from '../context/LoginProvider'
//import { InfoContext } from '../context/InfoProvider'
import { Link } from 'react-router-dom';



const Home = (props) => {

    const { login } = React.useContext(LoginContext)
    // const { infoEdit, setInfoEdit } = React.useContext(InfoContext)

    const [titles, setTitles] = React.useState([])
    // const [editForm, setEditForm] = React.useState('')
    // const [error, setError] = React.useState(null)
    // const [id, setId] = React.useState(0)
    
    


    

    React.useEffect(() => {
        
        const getData = async() => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const res = await data.json()
            
            setTitles(res)
        }
        getData()
    }, [])
    

    const redirection = ()=>{
        props.history.push('/login')
    }
    
    // const editButton = (item) => {
    //     setEditForm(item.title)
    //     setId(item.id)
    //     setInfoEdit({
    //         title: item.title,
    //         body: item.body
    //     })
    //     props.history.push(`/edit-form/${item.id}`)
    // }
    
    // const processEditForm = (e) => {
    //     e.preventDefault()
    //     if (!editForm.trim()) {
    //         setError('No puede estar vacío')
    //         return
    //     }
    //     const titleEdited = titles.map(item => item.id === id ? { userId: item.userId, id: item.id, title: editForm, body: item.body } : item)
    //     setTitles(titleEdited)
    //     setEditForm('')
    //     setError(null)

    // }
    const eliminar = (id) => {
        const titleEliminado = titles.filter(item => item.id !== id)
        setTitles(titleEliminado)
    }



    return login === true ? (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Titles</h1>
                    <hr />
                    <ul className="list-group">
                        {
                            titles.map(item => (
                                <li className="list-group-item" key={item.id} >
                                        
                                        
                                        {item.title}
                                        
                                        <button
                                        className="btn btn-danger btn-sm float-end ms-2"
                                        onClick={()=>eliminar(item.id)}
                                        >
                                            eliminar
                                        </button>

                                        <Link
                                        className="btn btn-warning btn-sm float-end ms-2"
                                        to={`/edit-form/${item.id}`}
                                        // onClick={()=>editButton(item)}
                                        >
                                        
                                            editar
                                        </Link>
                                    
                                        <Link to={`/detail/${item.id}`}>
                                        <button
                                            className="btn btn-primary btn-sm float-end ms-2"
                                        >
                                            detalle
                                        </button>
                                        </Link>
                                </li>

                            ) )
                        }
                        
                    </ul>
                </div>

                {/* <div className="col-12 col-md-6">
                    <h1 className='text-center'>Edit form</h1>
                    <hr />                    
                    <form onSubmit={processEditForm}>
                        {
                            error !== null ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : null
                        }
                        <input
                            type="text"
                            className='form-control mb-2'
                            onChange={e => setEditForm(e.target.value)}
                            value={editForm}
                        />
                        <button
                            className="btn btn-warning w-100" type='submit'
                        >
                            Editar
                        </button>
                                
                    </form>
                </div> */}
            </div>
        </div>
    ) : (
        
       <main className='contenido text-center'>
                <div className="card__image-container">
                <img src={alkemy} alt="logo alkemy" />
                </div>
                <div className="card__header">
                    <h2 className="title">Bienvenidos al challenge frontend</h2> <br />
                <h5 className="subtitle">Para iniciar<button
                    className='btn btn-primary ms-2'
                    onClick={() => redirection()}
                >
                    click aquí
                </button></h5><br />
                
                </div>
        </main>
    )
}

export default withRouter(Home)