import React, { useContext } from 'react'
import Title from '../components/Title'
import { NavLink, Link } from 'react-router-dom'
import { MdGridView, } from "react-icons/md";
import { CiWallet, CiSettings, CiLogout } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GoGoal } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ManContext } from '../context/ManContext';







const Sidebar = () => {

    const { user } = useContext(ManContext)
    return (
        <div className=' bg-neutral-900 py-11 px-7 flex flex-col gap-48'>
            <div className='flex flex-col gap-8'>
                <div className=''>
                    <Title style={'text-white text-lg'} />
                </div>
                <ul className=' flex-col gap-4'>
                    <li className=' '>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600 text-sm font-semibold' : 'flex text-white py-3 px-4 rounded gap-3 items-center'} end>
                            <MdGridView className='size-4' />
                            <p className=''>Overview</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/balance' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <CiWallet className='size-4' />
                            <p className=' font-light'>Balance</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/txn' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <GrTransaction className='size-4' />
                            <p className='font-light'>Transactions</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className=' text-white py-3 px-4 rounded flex gap-3 items-center'>
                            <LiaMoneyBillSolid className='size-4' />
                            <p className='font-light'>Bills</p>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className=' text-white py-3 px-4 rounded flex gap-3 items-center'>
                            <FaMoneyBillTrendUp className='size-4' />
                            <p className='font-light'>Expenses</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className=' text-white py-3 px-4 rounded flex gap-3 items-center'>
                            <GoGoal className='size-4' />
                            <p className='font-light'>Goal</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className=' text-white py-3 px-4 rounded flex gap-3 items-center'>
                            <CiSettings className='size-4' />
                            <p className='font-light'>Settings</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-11'>
                <button className='flex py-3 px-4 gap-3 items-center bg-[rgba(255,255,255,0.1)] rounded'>
                    <CiLogout className='text-white' />
                    <p className='text-white'>Logout</p>
                </button>
                <div className='flex text-white gap-4 justify-between items-center py-8'>
                    <FaRegUserCircle className='size-6' />
                    <div className=''>
                        <p className='font-semibold text-sm'>{user?.firstName} {user?.lastName}</p>
                        <p className='text-xs'>View your profile</p>
                    </div>
                    <BsThreeDotsVertical />
                </div>
            </div>
        </div >
    )
}

export default Sidebar