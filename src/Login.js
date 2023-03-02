import {useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { ViewerContext} from './ViewerContext'



function Login({onFormSwitch}){
  
    const {viewer, setViewer} = useContext(ViewerContext)
    const [formData, setFormData] = useState({email: '', password: ''})
    const [errors, setErrors] =  useState([])
    const history = useHistory()

    const {email, password} = formData
    
    const onSubmit = (e) => {
      e.preventDefault()
      const viewerLogin = { email: formData.email, password: formData.password }
    

      fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(viewerLogin)
      })
      .then(res => {
          if(res.ok){
              res.json().then(viewerInfo => {
                setViewer(viewerInfo)
                history.push(`/viewer_profile`)
              })
          } else {
              res.json().then(json => setErrors(json.errors))
          }
      })
  }
    
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value })
  }
  
  return (
    <div className='auth-form-container'>
            <form className='login-form' onSubmit={onSubmit} >

                <label htmlFor='email'>email</label>
                <input type='text' name='email' value={email} onChange={handleChange} />
                <br/>
          
                <label htmlFor='password'>password</label>
                <input type='password' name='password' value={password} onChange={handleChange} />
                <br/>
                
                <button type='submit'>Login</button>
                <br/>
            </form>
            <br/>
            {errors&&<div>{errors}</div>}
            <button className='link-btn' onClick={()=>onFormSwitch('register')}>Don't have an account? Register</button>
            
            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
  )
}

export default Login;