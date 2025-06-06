import React, { useContext } from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ManContext } from '../context/ManContext';



const Header = () => {

    const { user } = useContext(ManContext)

    return (
        <div>
            <div className='flex pl-6 pr-8 py-5 justify-between border-b-1 border-gray-200 '>
                <div className='flex gap-6 items-center '>
                    <p className='font-bold text-2xl'>{`Hello ${user?.firstName}`}</p>
                    <div className='flex items-center gap-1'>
                        <FaAnglesRight className='text-gray-400' />
                        <p className='text-sm text-gray-400'>May 25, 2025</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center relative'>
                    <FaBell />
                    <input className='bg-white text-xs text-gray-300 rounded pl-6 pr-12 py-2' type="search" name="" id="" placeholder='Search here' />
                    <CiSearch className='absolute items-end right-5' />
                </div>
            </div>
        </div>
    )
}

export default Header