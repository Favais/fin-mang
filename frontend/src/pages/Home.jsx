import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Title from '../components/Title'
import HeroImage from '../assets/hero.png'

const Home = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            {/* Top Banner */}
            <div className='flex py-3 px-4 md:px-20 items-center justify-center bg-black text-white text-xs md:text-sm text-center'>
                <p>Meet Finebank! Your one in all financial management SaaS platform</p>
            </div>
            {/* Navbar */}
            <div className='flex flex-col md:flex-row py-4 px-3 md:px-10 lg:px-20 justify-between items-center gap-4 md:gap-0'>
                <Title />
                <div className='flex gap-3 md:gap-5 items-center'>
                    <NavLink to='/login' className='text-xl md:text-sm'>Sign in</NavLink>
                    <NavLink to='/register' className='py-2 px-6 md:px-6 bg-teal-600 text-xl md:text-sm text-white rounded-lg'>Get started</NavLink>
                </div>
            </div>
            {/* Hero Section */}
            <div className='flex flex-col-reverse md:flex-row items-center md:items-start relative'>
                {/* Text Content */}
                <div className='p-6 md:p-16 lg:p-32 w-full md:w-1/2'>
                    <p className='text-3xl md:text-5xl lg:text-6xl font-bold'>Spend smarter.</p>
                    <p className='text-lg md:text-2xl pb-4 md:pb-10'>Move smarter.</p>
                    <p className='text-sm md:text-base'>Gain control and spend with insight,</p>
                    <p className='text-sm md:text-base mb-2'>monitor expenses, accounting, and more — in 120+ countries.</p>
                    <div className='pt-4 relative flex items-center'>
                        <input className='py-3 pr-24 md:pr-36 pl-4 bg-white w-full rounded-lg text-sm' type="email" placeholder='Enter your Email' />
                        <button className='absolute right-2 py-2 px-4 md:px-5 bg-teal-600 text-white rounded-lg text-xs md:text-sm'>Get started</button>
                    </div>
                </div>
                {/* Hero Image */}
                <div className='w-full md:w-1/2 flex justify-center md:justify-end items-center relative mb-6 md:mb-0'>
                    <img
                        className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg object-cover'
                        src={HeroImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Home