import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='w-full flex'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Dashboard