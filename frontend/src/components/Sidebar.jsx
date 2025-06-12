import React, { useContext, useState } from 'react'
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
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { ManContext } from '../context/ManContext';







const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const { user, setToken } = useContext(ManContext)
    const logout = () => {
        setToken('')
        localStorage.removeItem('token')
    }
    return (
        <div className=' bg-neutral-900 py-4 md:px-7 flex flex-col gap-48'>
            <div className='flex flex-col relative'>
                <button onClick={() => setCollapsed(!collapsed)} className="text-white relative left-28 mb-2">
                    {collapsed ? <AiOutlineMenuUnfold className='right-24 relative' size={30} /> : <AiOutlineMenuFold className=' relative left-2' size={30} />}
                </button>
                <div className='flex gap-4 mb-8 justify-center'>
                    {!collapsed && <Title style={'text-white text-lg'} />}
                </div>
                <ul className=' flex-col gap-4'>
                    <li className=' '>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600 text-sm font-semibold' : 'flex text-white py-3 px-4 rounded gap-3 items-center'} end>
                            <MdGridView size={25} />
                            <p className={`${collapsed ? 'hidden' : 'block'}`}>Overview</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/balance' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <CiWallet size={25} />
                            <p className={`${collapsed ? 'hidden' : 'block'}`}>Balance</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/txn' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <GrTransaction size={25} />
                            <p className={`${collapsed ? 'hidden' : 'block'}`}>Transactions</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bills' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <LiaMoneyBillSolid size={25} />
                            <p className={`${collapsed ? 'hidden' : 'block'}`}>Bills</p>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='/dashboard/expenses' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <FaMoneyBillTrendUp size={25} />
                            <p className={`${collapsed ? 'hidden' : 'block'}`}>Expenses</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/goals' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <GoGoal size={25} />
                            <p className={`${collapsed ? 'hidden' : 'block'}`}>Goal</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/settings' className={({ isActive }) => isActive ? 'flex text-white py-3 px-4 rounded gap-3 items-center bg-teal-600' : 'flex text-white py-3 px-4 rounded gap-3 items-center'}>
                            <CiSettings size={25} />
                            <p className={`${collapsed ? 'hidden' : 'block'}`}>Settings</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-11'>
                <button onClick={() => logout()} className='flex py-3 px-1 gap-3 justify-center items-center bg-[rgba(255,255,255,0.1)] rounded cursor-pointer'>
                    <CiLogout className='text-white' />
                    <p className={`${collapsed ? 'hidden' : 'block text-white'}`}>Logout</p>
                </button>
                <div className='flex text-white gap-4 justify-center items-center py-8'>
                    <FaRegUserCircle className='size-6' />
                    <div className={`${collapsed ? 'hidden' : 'block'}`}>
                        <p className='font-semibold text-sm'>{user?.firstName} {user?.lastName}</p>
                        <p className='text-xs'>View your profile</p>
                    </div>
                    <BsThreeDotsVertical className='hidden md:block' />
                </div>
            </div>
        </div >
    )
}

export default Sidebar