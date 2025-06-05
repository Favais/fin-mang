import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Title from '../components/Title'
import HeroImage from '../assets/hero.png'

const Home = () => {
    return (
        <div className='bg-gray-100 h-full'>
            <div className='flex py-3 px-20 items-center justify-center bg-black text-white text-sm'>
                <p className=''>Meet Finebank! Your one in all financial management SaaS platform</p>
            </div>
            <div className='flex py-4 px-3 justify-between'>
                <Title />
                <div className='flex gap-5 items-center'>
                    <NavLink to='/login'> Sign in</NavLink>
                    <NavLink to='/register' className='py-2 px-6 bg-teal-600 text-sm text-white rounded-lg'>Get started</NavLink>
                </div>
            </div>
            <div>
                <div className='flex relative'>
                    <div className='p-32'>
                        <p className='text-6xl'>Spend smarter.</p>
                        <p className='text-2xl pb-10'>Move smarter.</p>
                        <p>Gain control and spend with insight,</p>
                        <p>monitor expenses, accounting, and more — in 120+ countries.</p>
                        <div className='pt-4 relative flex items-center'>
                            <input className='py-3 pr-36 pl-4 bg-white w-full rounded-lg' type="email" placeholder='Enter your Email' />
                            <button className='absolute right-2 py-2 px-5 bg-teal-600 text-white rounded-lg'>Get started</button>
                        </div>
                    </div>
                    <img className='w-auto absolute right-20 bottom-40 h-64 rounded-lg' src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home