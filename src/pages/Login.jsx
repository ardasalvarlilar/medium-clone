import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full flex justify-center items-center bg-yellow-400 h-screen'>

      <h2 className='font-bold text-2xl m-3'>Login</h2>

      <form className='bg-white-200 w-6/12 h-6/12 flex flex-col justify-center items-center border-2 py-10 px-5 rounded-lg'>

        <label className='font-bold text-xl'>Email: </label>
        <input name='email' type="email" placeholder='example@email.com' className='py-2 px-3 rounded-xl border-2 border-black bg-transparent w-9/12 text-gray' />

        <label className='font-bold text-xl'>Password: </label>
        <input name='password' type="password" placeholder='password' className='py-2 px-3 rounded-xl border-2 border-black bg-transparent w-9/12 text-gray' />

        <input type="submit" value="Login" className='bg-black p-3 text-white mt-8 w-9/12 rounded-xl text-lg' />

        <p className='font-bold mt-2'>If you do not have an account, <Link className='text-blue-500' to='/register'>Register</Link></p>

      </form>

    </div>
  )
}

export default Login