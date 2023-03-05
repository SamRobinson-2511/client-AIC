import {useState} from 'react'
import {useForm} from './hooks/form-hook'
import {useHistory} from 'react-router-dom'
import Input from './components/Input'

const EditGalleryForm = ({patchReq, id}) => {
    const [gallery, setGallery] = useState([])
    const [errors, setErrors] = useState([])
    const history  = useHistory()
    const [formState, inputHandler, setFormData] = useForm({
        title: {value: ''}, 
        description: {value: ''}
    })

    

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState.inputs)
        fetch(`/galleries`, {
            patchReq,
            body: JSON.stringify(formState.inputs)
        })
        .then(res => {
            if(res.ok){
                res.json().then(gallery => {
                    setGallery(gallery)
                    console.log(gallery)
                    history.push(`/galleries/${id}`)
                })
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }


    
    
    return(
            <div className='gallery-form-container'>
                <form className='edit-gallery-form' onSubmit={onSubmit}>
                <Input
                    element='input'
                    id='email'
                    type='text'
                    label='email'
                    onInput={inputHandler}
                />

                <Input
                    element= 'input'
                    id='password'
                    type='password'
                    label='password'
                    onInput={inputHandler}
                />
                <button type='submit'>Edit Gallery</button>
            </form>
        </div>

    )
}

export default EditGalleryForm;