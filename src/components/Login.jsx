import React from 'react'
import { LoginContext } from '../context/LoginProvider'
import { withRouter } from 'react-router'
import { Formik } from 'formik'

const Login = (props) => {

    const { changeLogin } = React.useContext(LoginContext)

    // const [email, setEmail] = React.useState('')
    // const [pass, setPass] = React.useState('')
    // const [error, setError] = React.useState(null)
    const [formEnviado, setFormEnviado] = React.useState(false)

    
    // const processData = (e) => {
    //     e.preventDefault()

    //     if (!email.trim()) {
    //         setError('Email empty')
    //         return
    //     }
    //     if (!pass.trim()) {
    //         setError('Password empty')
    //         return
    //     }

    //     if (email !== 'challenge@alkemy.org' || pass !== 'react') {
    //         const getErrors = async () => {
    //             const data = await fetch('http://challenge-react.alkemy.org/')
    //             const res = await data.json()
    //             setError(res.error)
    //         }
    //         getErrors()
    //         return
    //     }

    //     console.log('datos procesados con éxito')
    //     localStorage.setItem('token', '10225724594719868')
    //     setEmail('')
    //     setPass('')
    //     setError(null)
    //     changeLogin(true)
    //     props.history.push('/')
    // }

    return (
        <div className='mt-5'>
            <h2 className='text-center'>Log in</h2>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">

                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validate={(valores) => {

                            let errores = {}

                            //validacion email
                            if (!valores.email) {
                                errores.email = 'Por favor ingresa un email'
                                // errores.vacioPassword = 'Por favor ingrese una contraseña'
                            } else if(valores.email !== 'challenge@alkemy.org'){
                                errores.email = 'Email incorrecto'
                            }

                            //validacion pass

                            if (!valores.password) {
                                errores.password = 'Por favor ingresa una contraseña'
                            } else if (valores.password !== 'react') {
                                errores.password = 'La contraseña es incorrecta'
                            }

                            return errores
                        }}

                        onSubmit={(valores, { resetForm }) => {
                            setFormEnviado(true)
                            localStorage.setItem('token', '10225724594719868')
                            resetForm()
                            setTimeout(() => {
                                setFormEnviado(false)
                            }, 5000);
                            changeLogin(true)
                            props.history.push('/')

                            console.log('formulario enviado')
                        }}
                    >
                        {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                            <form onSubmit={handleSubmit}>
                                
                                {
                                    touched.email && errors.email && <div className="alert alert-danger">
                                    {errors.email}
                                    </div>
                                }
                                <input
                                    className='form-control mb-2'
                                    type="email"
                                    placeholder='Ingrese un email'
                                    id='email'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {
                                    touched.password && errors.password && <div className="alert alert-danger">
                                    {errors.password}
                                    </div>
                                }
                                
                                <input
                                    className='form-control mb-2'
                                    type="text"
                                    placeholder='Ingrese un password'
                                    id='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                 
                                <button
                                    className='btn btn-primary w-100 btn-lg'
                                    type='submit'
                                >
                                    SEND
                                </button>

                                {
                                    formEnviado && (
                                        <div className="alert alert-success mt-2">
                                            Form enviado con éxito
                                        </div>
                                    )
                                }
                                
                            </form>
                            
                        )}

                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
