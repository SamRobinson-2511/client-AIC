import Input from './components/Input'
import {useForm} from './hooks/form-hook'

const Visit = (props) => {
    const [formState, inputHandler] = useForm({
        date: {value: ''},
        comment: {value: ''}
    })

    const submitHandler = (e) => {
        e.preventDefault()
        //post request to `/visits/new`
        console.log(formState.inputs)
    }

    return(
        <form onSubmit ={submitHandler}>
            <Input id='date' element='input' type='date' label='Date' onInput={inputHandler}/>
            <Input id='comment' element='input' type='text' label='Comment' onInput={inputHandler}/>
            <button type='submit'>Add Visit</button>
        </form>
    )
}

export default Visit;