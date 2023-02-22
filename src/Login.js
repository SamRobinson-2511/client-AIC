import {useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const baseUrl = 'http://localhost:3000/'
const loginUrl = baseUrl + 'login'

function Login(props){
    const emailRef = useRef()
    const passwordRef = useRef()
    const [viewer, setViewer] = useState([])
    const navigate = useNavigate()
    
    useEffect( () => {
        if (localStorage.vid)
          console.log('Viewer found:', localStorage.vid)
        else
          console.log('No user found')
      }, [])
    
    const handleLogin = (e) => {
        e.preventDefault()
        fetch( loginUrl, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json',
              accept: 'application/json'
            }, 
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value
            })
          })
          .then( r => r.json())
          .then( viewer => { 
            localStorage.vid = viewer.vid 
            navigate(`/viewer_profile/${viewer.id}`)
            console.log(viewer)
        })
        }
     
      return (
        <div className='auth-form-container'>
                <form class-name='login-form' onSubmit={handleLogin} className='login-form'>

                    <label htmlFor='email'>email</label>
                    <input ref={emailRef} type='email' id='email' />
                    
                    <label htmlFor='email'>password</label>
                    <input ref={passwordRef} type='password' id='password' />
                    <br/>
                    
                    <button type='submit'>Login</button>
                    <br/>

                </form>
                <button onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register</button>
            </div>
    )
}

export default Login;