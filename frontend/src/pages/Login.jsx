import React, { useState } from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaEye } from "react-icons/fa";


const Login = () => {
    const { register, handleSubmit } = useForm()

    const onsubmit = (data) => {
        setFormdata(data)

    }
    const [formData, setFormdata] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <div className='flex h-screen justify-center items-center gap-15'>
            <div className='flex flex-col gap-16 w-sm font-normal'>
                <Title />
                <form onSubmit={handleSubmit(onsubmit)} className='flex gap-6 flex-col'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium text-gray-900' htmlFor="email">Email Address</label>
                                <input className='border rounded py-3 px-4 text-gray-500' type="text" {...register('email')} placeholder='johndoe@email.com' />
                            </div>
                            <div className='flex flex-col gap-2 relative'>
                                <label className='flex justify-between' htmlFor="password"><span>Passwords</span> <span className='text-xs text-teal-600'>Forget Password?</span></label>
                                <input className='border rounded py-3 px-4 pr-10 text-gray-400' type={showPassword ? 'text' : 'password'} {...register('password')} placeholder='' />
                                <span onClick={toggleShowPassword} className='absolute right-3 top-12'>
                                    <FaEye color='grey' />
                                </span>
                            </div>
                        </div>
                        <div>
                            <button className='py-3 px-4 w-full bg-teal-600 rounded text-white'>Login</button>
                        </div>
                    </div>
                </form>
                <div className=' flex justify-center'>
                    <Link className='text-teal-600 ' to="/register">Create an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login