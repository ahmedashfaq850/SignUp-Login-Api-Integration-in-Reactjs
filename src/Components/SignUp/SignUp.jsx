import React from 'react'
import './SignUp.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../Redux/AuthSlice'
//import axios from 'axios'
const SignUp = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        let data = {
            [e.target.name]: e.target.value,
        }
        setInput({...input, ...data})
        //console.log(input)
    }


    async function handleSubmit(e) {
        e.preventDefault()
        dispatch(signUpUser(input))
    }

  return (
    <>
    
    <div className='form'>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Sign Up</h1>
            <input type='text' name='username' onChange={(e)=>handleChange(e)} placeholder='Enter Name' />
            <input type='text' onChange={(e)=>handleChange(e)} name='email' placeholder='Enter Email'/>
            <input type='text' onChange={(e)=>handleChange(e)} name='password' placeholder='Enter Password'/>
            <button type='submit'>Submit</button>
        </form>
        
    </div>
    </>
    
  )
}

export default SignUp