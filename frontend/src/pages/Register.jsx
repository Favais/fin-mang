import React, { useState } from 'react'
import Title from '../components/Title'
import { useForm } from 'react-hook-form'
import { FaEye } from 'react-icons/fa'

const Register = () => {
    const { register, handleSubmit } = useForm()

    const onsubmit = (data) => {
        setFormdata(data)
    }

    const [formData, setFormdata] = useState()
    const [showPassword, setShowPassword] = useState()
    const toggleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    console.log(formData);

    return (
        <div className='flex h-screen justify-center items-center gap-15'>
            <div className='flex flex-col gap-12 w-sm font-normal'>
                <Title />
                <form onSubmit={handleSubmit(onsubmit)} className='flex gap-6 flex-col'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-6'>
                            <div className=' flex gap-2 w-full'>
                                <div className='flex flex-col gap-1 min-w-[150px]'>
                                    <label className='font-medium text-gray-900' htmlFor="email">First Name</label>
                                    <input className='border rounded py-3 px-4 text-gray-500' type="text" {...register('firstName')} placeholder='Firstname' />
                                </div>
                                <div className='flex flex-col gap-1 min-w-[150px]'>
                                    <label className='font-medium text-gray-900' htmlFor="lastName">Last Name</label>
                                    <input className='border rounded py-3 px-4 text-gray-500' type="text" {...register('lastName')} placeholder='Lastname' />
                                </div>
                            </div>
                            <div>
                                <input className='border w-full rounded py-3 px-4 text-gray-500' type="email" placeholder='Email' {...register('email')} />
                            </div>
                            <div>
                                <input className='border w-full rounded py-3 px-4 text-gray-500' type="tel" placeholder='Phone Number' {...register('phone')} />
                            </div>
                            <div>
                                <input className='border w-full rounded py-3 px-4 text-gray-500' type="text" placeholder='Address' {...register('address')} />
                            </div>
                            <div className='flex flex-col gap-2 relative'>
                                <label className='flex justify-between' htmlFor="password"><span>Passwords</span> </label>
                                <input className='border rounded py-3 px-4 pr-10 text-gray-400' type={showPassword ? 'text' : 'password'} {...register('password')} placeholder='' />
                                <span onClick={toggleShowPassword} className='absolute right-3 top-12'>
                                    <FaEye color='grey' />
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className='text-xs font-light text-gray-500'>By coninuing, you agree to our <span className='text-teal-600'>terms and conditions</span></p>
                        </div>
                        <div>
                            <button className='py-3 px-4 w-full bg-teal-600 rounded text-white'>Sign up</button>
                        </div>
                    </div>
                </form>
                <div className=' '>
                    <p className='text-center font-light text-sm text-gray-500'>Already have an account? <span className='text-teal-600'>Sign in here</span></p>
                </div>
            </div>

        </div>
    )
}

export default Register