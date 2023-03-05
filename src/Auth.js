import {useState} from 'react'
import {useForm} from './hooks/form-hook'
import Input from './components/Input'

const Auth = (props) => {

    const [formState, inputHandler, setFormData] = useForm({
        email: {value: ''}, 
        password: {value: ''}
    })

    const [isLoginMode, setIsLogInMode] = useState(true)
    console.log("first")
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

    const authSubmitHandler = (e) => { 
        e.preventDefault()
        console.log(formState.inputs)
        
    }
    
    return(
        <div className="auth-form-container">
            <form className='login-form' onSubmit={authSubmitHandler}>
            {!isLoginMode && (
                <Input
                    element='input'
                    id='name'
                    type='text'
                    label='Your Name'
                    onInput={inputHandler}
                />

            )}

                <Input 
                    id='email'
                    element='input'
                    type='email'
                    label='email'
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

export default Auth

