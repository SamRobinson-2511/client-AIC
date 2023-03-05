// import Input from  './Input'
// import {useForm} from './form-hook'

// const Contact = (props) => {
//     const [formState, inputHandler] = useForm({
//         first_name: {value: ''},
//         last_name: {value: ''},
//         email: {value: ''},
//         password: {value: ''},
//         zip_code: {value: ''}
//     })
//     const submitHandler = (e) => {
//         e.preventDefault()
//         console.log(formState.inputs)
//     }
//     return(
//     <div className='auth-form-container'>
//         <form className='reg-form'onSubmit={submitHandler}>
//             <Input 
//                 id='first_name' 
//                 element='input' 
//                 type='text'
//                 label='first_name'
//                 onInput={inputHandler}
//             />
//             <Input 
//                 id='last_name' 
//                 element='input' 
//                 type='text'
//                 label='last_name'
//                 onInput={inputHandler}
//             />
//             <Input 
//                 id='email' 
//                 element='input' 
//                 type='text'
//                 label='email'
//                 onInput={inputHandler}
//             />
//             <Input 
//                 id='zip_code' 
//                 element='input' 
//                 type='text'
//                 label='zip_code'
//                 onInput={inputHandler}
//             />
//             <Input 
//                 id='password' 
//                 element='input' 
//                 type='text'
//                 label='password'
//                 onInput={inputHandler}
//             />

//             <button type='submit'> Sign Up </button>
//         </form>
//         </div>
//     )
// }

// export default Contact;