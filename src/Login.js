import {useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({handleLogin}){
    const [viewer, setViewer] = useState([])
    const navigate = useNavigate()
    
    useEffect( () => {
        if (localStorage.vid)
          console.log('Viewer found:', localStorage.vid)
        else
          console.log('No user found')
      }, [])
    
    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     fetch( '/login', {
    //         method: 'POST', 
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Accept: 'application/json'
    //         }, 
    //         body: JSON.stringify({
    //           email: emailRef.current.value,
    //           password: passwordRef.current.value
    //         })
    //       })
    //       .then( res => res.json())
    //       .then( viewer => { 
    //         localStorage.vid = viewer.vid 
    //         navigate(`/viewer_profile`)
    //         console.log(viewer.vid)
    //     })
    //   }

    const logOut = () => {
        fetch( 'logout', {
            headers: {}
        })
        localStorage.removeItem('token')
        setViewer({email: '', password:''})
        console.log(localStorage.vid)
        }
     
      return (
        <div className='auth-form-container'>
                <form className='login-form' onSubmit={handleLogin} >

                    <label htmlFor='email'>email</label>
                    <input ref={emailRef} type='email' id='email' />
                    <br/>
              
                    <label htmlFor='password'>password</label>
                    <input ref={passwordRef} type='password' id='password' />
                    <br/>
                    
                    <button type='submit'>Login</button>
                    <br/>
                </form>
                <br/>
                <button className='link-btn' onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register</button>
                
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
    )
}

export default Login;