import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [message,setMessage] = useState("");

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full shadow-md rounded max-w-sm bg-white  px-6 mt-6 mb-8'>
            <h2 className='font-semibold text-xl mb-4'>Please Login</h2>
            <form>
                <div className='mb-4'>
                    <label className='block font-bold text-sm text-gray-700 ' htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Email Address' 
                    className='w-full  rounded border py-2 px-3 focus:shadow focus:outline-none leading-tight appearence-none'></input>
                </div>
                <div className='mb-4'>
                    <label className='block font-bold text-sm text-gray-700 ' htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' placeholder='Password' 
                    className='w-full  rounded border py-2 px-3 focus:shadow focus:outline-none leading-tight appearence-none'></input>
                </div>
                {
                  message && <p className='text-red-500 font-xs italic mb-3'>{message}</p>
                }
                <div className='mb-4'>
                  <button className='bg-blue-500 font-bold hover:bg-blue-700 text-white px-7 py-3 rounded focus:outline-none' >Login</button>
                </div>
                <p className='text-sm font-medium align-baseline'>Haven't an account? Please <Link to="/register" 
                className="text-blue-500 hover:text-blue-700">Register</Link></p>

                {/*google sign in*/}
                <div className='mt-4'>
                  <button className='flex bg-secondary w-full text-white rounded justify-center 
                  gap-2 items-center py-2 px-4 hover:bg-blue-700 focus:outline-none font-bold flex-wrap'>
                    <FaGoogle className='mr-2'/>
                    Sign in with Google
                  </button>
                  <p className='text-xs text-gray-700 text-center mt-4 mb-4'>©2025 Book Store. All rights reserved.</p>
                </div>
            </form>
        </div>
    </div>
      
   
  )
}

export default Login
