import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (

    <div className='w-full flex flex-col justify-center items-center bg-yellow-400 h-screen'>

      <h2 className='font-bold text-2xl m-3'>Register</h2>

      <form className='bg-white-200 w-6/12 h-6/12 flex flex-col justify-center items-center border-2 py-10 px-5 rounded-lg'>
        <label className='font-bold text-xl'>Username: </label>
        <input name='username' type="text" placeholder='username' className='py-2 px-3 rounded-xl border-2 border-black bg-transparent w-9/12 text-gray' />

        <label className='font-bold text-xl'>First Name: </label>
        <input name='firstName' type="text" placeholder='First Name' className='py-2 px-3 rounded-xl border-2 border-black bg-transparent w-9/12 text-gray' />

        <label className='font-bold text-xl'>Last Name: </label>
        <input name='lastName' type="text" placeholder='Last Name' className='py-2 px-3 rounded-xl border-2 border-black bg-transparent w-9/12 text-gray' />

        <label className='font-bold text-xl'>Email: </label>
        <input name='email' type="email" placeholder='example@email.com' className='py-2 px-3 rounded-xl border-2 border-black bg-transparent w-9/12 text-gray' />

        <label className='font-bold text-xl'>Password: </label>
        <input name='password' type="password" placeholder='password' className='py-2 px-3 rounded-xl border-2 border-black bg-transparent w-9/12 text-gray' />

        <input type="submit" value="Register" className='bg-black p-3 text-white mt-8 w-9/12 rounded-xl text-lg' />

        <p className='font-bold mt-2'>If you have an account, <Link className='text-blue-500' to='/login'>Login</Link></p>
      </form>


    </div>
  )
}

export default Register