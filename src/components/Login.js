import {useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { ViewerContext} from '../ViewerContext'
import { useForm } from '../hooks/form-hook'
import Input from './Input'



const Login = (props) =>{
  
    const {viewer, setViewer} = useContext(ViewerContext)
    // const [formData, setFormData] = useState({email: '', password: ''})
    const [errors, setErrors] =  useState([])
    const history = useHistory()

    const [formState, inputHandler, setFormData] = useForm({
      email: {value: ''}, 
      password: {value: ''}
  })

  const [isLoginMode, setIsLogInMode] = useState(true)
  console.log('hello')
  const switchModeHandler = () => {
    if(!isLoginMode){
      setFormData({
        name: undefined
      })
    } else {
      setFormData({
        ...formState.inputs, 
        name: {value: ''}
      })
    }
    setIsLogInMode(prevMode => !prevMode)
  }
 
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState.inputs)
    // const viewerLogin = { email: formData.email, password: formData.password }
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(formState.inputs)
    })
    .then(res => {
      console.log(res)
        if(res.ok){
            res.json().then(viewerInfo => {
              setViewer(viewerInfo)
              console.log(viewerInfo)
              history.push(`/viewer`)
            })
        } else {
            res.json().then(json => setErrors(json.errors))
        }
    })
  }
    
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({...formData, [name]: value })
  // }
  
  return (
    <div className='auth-form-container'>
            <form className='login-form' onSubmit={onSubmit} >
            {isLoginMode && (
             <Input
                element='input'
                id='email'
                type='text'
                label='email'
                onInput={inputHandler}
            />

            )}

            <Input
                element= 'input'
                id='password'
                type='password'
                label='password'
                onInput={inputHandler}
            />
            <button type='submit'>
                    {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                </button>
                <button type='button' onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</button>

            </form>
        </div>
    )
}
            

            


//                 <label htmlFor='email'>email</label>
//                 <input type='text' name='email' value={email} onChange={handleChange} />
//                 <br/>
          
//                 <label htmlFor='password'>password</label>
//                 <input type='password' name='password' value={password} onChange={handleChange} />
//                 <br/>
                
//                 <button type='submit' onClick={onSubmit}>Login</button>
//                 <br/>
//             </form>
//             <br/>
//             {errors&&<div>{errors}</div>}
//             <button className='link-btn' onClick={()=>onFormSwitch('register')}>Don't have an account? Register</button>
            
//             {/* <button onClick={handleLogout}>Logout</button> */}
//         </div>
//   )
// }

export default Login;