import Input from  './Input'
import {useForm} from '../hooks/form-hook'

const Register = (props) => {
    const [formState, inputHandler] = useForm({
        first_name: {value: ''},
        last_name: {value: ''},
        email: {value: ''},
        password: {value: ''},
        zip_code: {value: ''}
    })
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formState.inputs)
        fetch('/viewers', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formState.inputs)
        })
    }


    return(
    <div className='auth-form-container'>
        <form className='reg-form'onSubmit={submitHandler}>
            <Input 
                id='first-name' 
                element='input' 
                type='text'
                label='first-name'
                onInput={inputHandler}
            />
            <Input 
                id='last_name' 
                element='input' 
                type='text'
                label='last-name'
                onInput={inputHandler}
            />
            <Input 
                id='email' 
                element='input' 
                type='text'
                label='email'
                onInput={inputHandler}
            />
            <Input 
                id='zip_code' 
                element='input' 
                type='text'
                label='zip_code'
                onInput={inputHandler}
            />
            <Input 
                id='password' 
                element='input' 
                type='text'
                label='password'
                onInput={inputHandler}
            />

            <button type='submit'> Register </button>
        </form>
    </div>
    )
}

export default Register;






// import { useState } from 'react'
// import { useHistory} from 'react-router-dom'

// function Register({onFormSwitch}){
//     const [formData, setFormData] = useState({
//         first_name: '',
//         last_name: '', 
//         email:'',
//         password: '',
//         zip_code: ''
//     })
//     const [viewer, setViewer] = useState([])
//     const [errors, setErrors] = useState([])
//     const history = useHistory()

//     const {first_name, last_name, email, password, zip_code} = formData
    
//     const onSubmit = (e) => {
//         e.preventDefault()
//         const viewer = {
//             first_name,
//             last_name,
//             email, 
//             password,
//             zip_code
//         }

//         fetch('/viewers', {
//             method: 'POST', 
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(viewer)
//         })
//         .then(r => {
//             if(r.ok){
//                 r.json().then(viewer => {
//                     console.log(viewer)
//                     console.log(viewer)
//                     history.push(`/viewers/${viewer.id}`)
//                 })
//             }
//         })
//     }

//     const handleChange = (e) => {
//         const {name, value} = e.target
//         setFormData({...formData, [name]: value})
//     }

//     return(
//         <div className='auth-form-container'>
//             <form className='reg-form' onSubmit={onSubmit}>

//                 <label htmlFor='first-name'>first-name</label>
//                 <input type='text' name='first_name' value={first_name} onChange={handleChange}/> 

//                 <label htmlFor='last-name'>last-name</label>
//                 <input type='text' name='last_name' value={last_name} onChange={handleChange}/>

//                 <label htmlFor='email'>email</label>
//                 <input type='text' name='email' value={email} onChange={handleChange}/>
                
//                 <label htmlFor='password'>password</label>
//                 <input type='password' name='password' value={password} onChange={handleChange}/>

//                 <label htmlFor='zip-code'>zip-code</label>
//                 <input type='text' name='zip_code' value={zip_code} onChange={handleChange}/>
                
//                 <button type='submit' onClick={onSubmit}>Register</button>
//             </form>
//             {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
//             <button className='link-btn' onClick={()=>onFormSwitch('login')}>Already have an account? Login here</button>
            
//         </div>
//     )
// }

// export default Register;