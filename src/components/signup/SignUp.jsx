import React, { useState } from 'react';
import './SignUp.css';
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]:input.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const url = 'http://localhost:5000/users';
            const {data:res} = await axios.post(url, data);
            navigate('/signin');
            console.log(res.message)
        }catch(err){
            if(err.response && err.response.status >= 400 && err.response.status <= 500){
                setError(err.response.data.message);
            }
        }
    }

    return (
        <div className='flex justify-center align-items-center h-screen '>
            <div className='text-center flex flex-column gap-2'>
                <h1 className='uppercase font-semibold text-6xl'>Logo</h1>
                <div className='text-gray-600 text-2xl font-bold'>Create an account</div>
                <div className='text-gray-400 text-sm font-semibold'>Start your 30 days free trail!</div>
                <form className='mt-2' onSubmit={handleSubmit}>
                    <input className='border rounded-md w-full md:w-72 px-3 py-2 bg-white' type="text" placeholder='Enter your email' name='email' value={data.email} onChange={handleChange} required/>
                    <input className='border rounded-md w-full md:w-72 px-3 py-2 bg-white' type="password" placeholder='Enter your password' name='password' value={data.password} onChange={handleChange} required/>
                    {error && <div className='text-red-600 text-sm'>{error}</div>}
                    <button className='bg-indigo-600 text-white rounded-md px-3 py-2'>Get started</button>
                    <div className="divider">OR</div>
                    <button className='flex items-center justify-center gap-2 border rounded-md px-3 py-2 font-semibold text-gray-600'>
                        <FcGoogle className='text-2xl'/>  Sign up with Google
                    </button>
                    <div className='text-gray-500 font-semibold text-sm'>Already have an account? 
                        <Link to="/signin" className='text-indigo-500 font-semibold text-sm'> Log in</Link> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;