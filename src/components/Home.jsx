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
                                        
                                        
                                        <i
                                            className="bi bi-trash-fill text-danger float-end ms-3 cursor size-icons"
                                            onClick={()=>eliminar(item.id)}
                                        ></i>
                                        

                                        <Link
                                        className="text-warning float-end ms-3 "
                                        to={`/edit-form/${item.id}`}
                                        
                                    >
                                        <i className="bi bi-pencil-fill size-icons"></i>
                                        
                                        </Link>
                                    
                                    <Link
                                        to={`/detail/${item.id}`}
                                        className='ms-2'
                                    >
                                        
                                            <i class="bi bi-arrow-up-square-fill float-end text-dark size-icons"></i>
                                        
                                        </Link>
                                </li>

                            ) )
                        }
                        
                    </ul>
                </div>

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