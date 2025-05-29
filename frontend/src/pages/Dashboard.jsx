import React from 'react'
import Sidebar from '../components/Sidebar'
import Dash from './Dash'
import MainContent from './MainContent'
import { Outlet, Route, Routes } from 'react-router-dom'
import Balance from './Balance'

const Dashboard = () => {
    return (
        <div className='w-full flex'>
            <Sidebar />
            <Routes>
                <Route path='' element={<Dash />} />
                <Route path='/balance' element={<Balance />} />
            </Routes>
        </div>
    )
}

export default Dashboard