import {useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { ViewerContext } from '../context/ViewerContext'
// import useForm from '../hooks/form-hook'
// import Input from './Input'


const Login = () => { 
  const {setViewer} = useContext(ViewerContext)
  const [errors, setErrors] = useState(null)
  const[loginObj, setLoginObj] = useState({
    email: "",
    password: ""
  })
  
  function handleSubmit(e) {
    e.preventDefault()
    setErrors(null)
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    }).then((res) => {
      if (res.ok) {
        res.json().then((viewerInfo) => setViewer(viewerInfo))
      } else {
          res.json().then((err) => setErrors(err.errors))
      }
    })
  }

  function handleChange(e) {
      const name = e.target.name
      const value = e.target.value
      setLoginObj({...loginObj, [name]: value})
  } 

  return( 
    <div>
    <form>
        <input id='email' type='text' label='email' value={loginObj.email} name='email' onInput={handleChange}/>
        <input id='password' type='password' label='password' value={loginObj.password} name='password' onInput={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login
      

  




{/* export default Login
  
    // const [formData, setFormData] = useState({email: '', password: ''})
    // const [errors, setErrors] =  useState([])
    // const history = useHistory()
    

  // const [formState, inputHandler, setFormData] = useForm({ email, password })

  // const [isLoginMode, setIsLogInMode] = useState(true)
  // const switchModeHandler = () => { */}
  //   if(!isLoginMode){
  //     setFormData({
        // first_name: {value: ''},
        // last_name: {value: ''},
        // email: {value: ''},
        // password: {value: ''},
        // zip_code: {value: ''}
      // })
    // } else {
//       setFormData({
//         ...formState.inputs, 
//         name: {value: ''}
//       })
//     }
//     setIsLogInMode(prevMode => !prevMode)
//     history.push(`/register`)
//   }
 
//   const onSubmit = (e) => {
//     e.preventDefault()
//     console.log(formState.inputs)
//     // const viewerLogin = { email: formData.email, password: formData.password }
//     fetch(`/login`,{
//       method:'POST',
//       headers:
//         {
//           'Content-Type': 'application/json'
//         },
//       body:JSON.stringify(formState.inputs)
//     })
//     .then(res => {
//         if(res.ok){
//             res.json().then(viewer => {
//               localStorage.uid = viewer.uid
//               setViewer(viewer)
//               history.push(`/`)
//             })
//         } else {
//             res.json().then(json => setErrors(json.errors))
//         }

//     })
//   }
    
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target
//   //   setFormData({...formData, [name]: value })
//   // }
  
//   return (
//     <div className='auth-form-container'>
//             <form className='login-form' onSubmit={onSubmit} >
//             {isLoginMode && (
//              <Input
//                 element='input'
//                 id='email'
//                 type='text'
//                 label='email'
//                 onInput={inputHandler}
//             />
//             )}

//             <Input
//                 element= 'input'
//                 id='password'
//                 type='password'
//                 label='password'
//                 onInput={inputHandler}
//             />
//             <button type='submit'>
//                     {isLoginMode ? 'LOGIN' : 'SIGNUP'}
//                 </button>
//                 <button type='button' onClick={switchModeHandler}>Accounted for? {isLoginMode ? 'SIGNUP' : 'LOGIN'}</button>
//             </form>
//         </div>
//     )
// }
            

            


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

// const onSubmit = (e) => {
//   e.preventDefault()
//   console.log(formState.inputs)
//   // const viewerLogin = { email: formData.email, password: formData.password }
//   fetch(`/login`,{
//     method:'POST',
//     headers:
//       {
//         'Content-Type': 'application/json'
//       },
//     body:JSON.stringify(formState.inputs)
//   })
//   .then(res => {
//       if(res.ok){
//           res.json().then(viewer => {
//             localStorage.uid = viewer.uid
//             setViewer(viewer)
//             history.push(`/`)
//           })
//       } else {
//           res.json().then(json => setErrors(json.errors))
//       }

//   })
// }