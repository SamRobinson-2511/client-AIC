import { useState } from 'react'
import { useHistory} from 'react-router-dom'




function Register({onFormSwitch}){
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email:'',
        password: '',
        zip_code: ''
    })
    
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {first_name, last_name, email, password, zip_code} = formData
    
    const onSubmit = (e) => {
        e.preventDefault()
        const viewer = {
            first_name,
            last_name,
            email, 
            password,
            zip_code
        }

        fetch('/viewers', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(viewer)
        })
        .then(r => {
            if(r.ok){
                r.json().then(viewer => {
                    history.push(`/viewers/${viewer.id}`)
                })
            } else {
                r.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return(
        <div className='auth-form-container'>
            <form className='reg-form' onSubmit={onSubmit}>

                <label htmlFor='first-name'>first-name</label>
                <input type='text' name='first_name' value={first_name} onChange={handleChange}/> 

                <label htmlFor='last-name'>last-name</label>
                <input type='text' name='last_name' value={last_name} onChange={handleChange}/>

                <label htmlFor='email'>email</label>
                <input type='text' name='email' value={email} onChange={handleChange}/>
                
                <label htmlFor='password'>password</label>
                <input type='password' name='password' value={password} onChange={handleChange}/>

                <label htmlFor='zip-code'>zip-code</label>
                <input type='text' name='zip_code' value={zip_code} onChange={handleChange}/>
                
                <button type='submit'>Register</button>
            </form>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
            <button className='link-btn' onClick={()=>onFormSwitch('login')}>Already have an account? Login here</button>
            
        </div>
    )
}

export default Register;