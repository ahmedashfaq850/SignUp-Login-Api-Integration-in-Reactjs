import React from 'react'
import '../SignUp/SignUp.css'
import { useState } from 'react'


const Login = () => {

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });

    const HandleInput = (e) => {
        let data = {
            [e.target.name]: e.target.value,
        }
        setInput({...input, ...data})
    }


    const HandleSubmit = async (e) => {
        e.preventDefault()
        let item = {username: input.username, email: input.email, password: input.password}
        let res = await fetch('https://reqres.in/api/login',{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        let result = await res.json()
        localStorage.setItem('user-data', JSON.stringify(result))
        console.log(result)
    }

  return (
    <div className='form'>
        <form onSubmit={(e)=>{HandleSubmit(e)}}>
        <h1>Login</h1>
            <input type='text' name='username' onChange={(e)=>HandleInput(e)}  placeholder='Enter Name' />
            <input type='text' name='email' onChange={(e)=>HandleInput(e)} placeholder='Enter Email'/>
            <input type='text' name='password' onChange={(e)=>HandleInput(e)} placeholder='Enter Password'/>
            <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}

export default Login