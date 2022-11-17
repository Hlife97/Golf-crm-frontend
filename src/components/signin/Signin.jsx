import React from 'react';
import './Signin.css';
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='flex justify-center align-items-center h-screen '>
            <div className='text-center flex flex-column gap-2'>
                <h1 className='uppercase font-semibold text-6xl'>Logo</h1>
                <div className='text-gray-600 text-2xl font-bold'>Log in to your account</div>
                <div className='text-gray-400 text-sm font-semibold'>Welcome back! Please enter your details.</div>
                <form className='mt-2'>
                    <div className="form_group">
                        <label class="label">
                            <span class="label-text font-semibold">Email</span>
                        </label>
                        <input className='border rounded-md w-full md:w-72 px-3 py-2 bg-white' type="text" placeholder='Enter your email'/>
                    </div>
                    <div className="form_group">
                        <label class="label">
                            <span class="label-text font-semibold">Password</span>
                        </label>
                        <input className='border rounded-md w-full md:w-72 px-3 py-2 bg-white' type="password" placeholder='Enter your password'/>
                    </div>
                    <div class="flex justify-between items-center">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="checkbox checkbox-xs checkbox-info" />
                            <span class="label-text text-sm">Remember for 30 days</span> 
                        </label>
                        <Link to="/choose-password" className='text-sm text-indigo-500'>Forgot password</Link>
                    </div>
                    <button className='bg-indigo-600 text-white rounded-md px-3 py-2'>Get started</button>
                    <div class="divider">OR</div>
                    <button className='flex items-center justify-center gap-2 border rounded-md px-3 py-2 font-semibold text-gray-600'>
                        <FcGoogle className='text-2xl'/> Sign up with Google
                    </button>
                    <div className='text-gray-500 font-semibold text-sm'>Don't have an account? 
                        <Link to='/signup' className='text-indigo-500 font-semibold text-sm'> Sign up</Link> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;