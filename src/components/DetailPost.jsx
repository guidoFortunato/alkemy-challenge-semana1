import React from 'react'
import { useParams, withRouter } from 'react-router'

const DetailPost = () => {

    const { id } = useParams()
    

    const [detail, setDetail] = React.useState([])

    React.useEffect(() => {

        try {
            const getData = async() => {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const res = await data.json()
               
                setDetail(res)
            }
            getData()
            
            
        } catch (error) {
            console.log(error)
        }
        


    }, [id])


    return (
        
        // <div className="d-flex justify-content-center text-center">            
        //         <div className="card app">
        //             <div className="card-body">
                    
        //                 <p className="card-text">USERID: <span className='fw-bold'> {detail.userId}</span></p>
                        
        //                 <p className="card-text">ID: <span className='fw-bold'> {detail.id}</span></p>
                        
        //                 <p className="card-title">TITLE: <span className='fw-bold'>{detail.title}</span></p>

        //                 <p className="card-text">DESCRIPTION: <span className='fw-bold'>{detail.body} </span></p>

        //             </div>
        //         </div>           
        // </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>USERID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{detail.userId}</td>
                    <td>{detail.id}</td>
                    <td>{detail.title}</td>
                    <td>{detail.body}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default withRouter(DetailPost)
