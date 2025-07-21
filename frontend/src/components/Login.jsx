import React from 'react'

const Login = () => {
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full shadow-md rounded max-w-sm bg-white  px-6 mt-6 mb-8'>
            <h2 className='font-semibold text-xl mb-4'>Please Login</h2>
            <form>
                <div>
                    <label className='block font-bold text-sm text-gray-700 ' htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Email Address' 
                    className='w-full  rounded border py-2 px-3 focus:shadow focus:outline-none leading-tight appearence-none'></input>
                </div>
            </form>
        </div>
    </div>
      
   
  )
}

export default Login
