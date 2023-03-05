import { useState, useContext } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'

function EditProfile({patchReq}){
    const [viewer, setViewer] = useState(viewer)

    const history = useHistory()
    const [formData, setFormData] = useState({
        first_name:'', 
        last_name: '', 
        email: '', 
        password: '', 
        zip_code: ''
        //add more fields
    })
    const [errors, setErrors] = useState([])

    const {id, first_name, last_name, email, password, zip_code} = formData

    const onSubmit = (e) => {
        e.preventDefault()
        const currentViewer = {
            first_name,
            last_name,
            email, 
            password,
            zip_code
        }
        fetch(`/viewers/${id}/edit`)
        .then(r=>r.json())
        .tnen(console.log)
        


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    
    
    return(
        <div className='edit-form-container'>
            <form className='prof-form' onSubmit={onSubmit}>

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

            <button type='submit'>Update</button>
            </form>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )}
}

export default EditProfile;