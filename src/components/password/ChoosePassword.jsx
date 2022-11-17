import React from 'react';

const ChoosePassword = () => {
    return (
        <div className='flex justify-center align-items-center h-screen '>
            <div className='text-center flex flex-column gap-2'>
                <h1 className='uppercase font-semibold text-6xl'>Logo</h1>
                <div className='text-gray-600 text-2xl font-bold'>Choose a password</div>
                <div className='text-gray-400 text-sm font-semibold'>Must be at least 8 characters.</div>
                <form className='mt-2'>
                    <div className="form_group">
                        <input className='border rounded-md w-full md:w-72 px-3 py-2 bg-white' type="password" placeholder='Enter your Password'/>
                    </div>
                    <div className="form_group">
                        <input className='border rounded-md w-full md:w-72 px-3 py-2 bg-white' type="password" placeholder='Enter your confirm password'/>
                    </div>
                    
                    <button className='bg-indigo-600 text-white rounded-md px-3 py-2'>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default ChoosePassword;