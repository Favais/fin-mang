import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dash from './Dash'
import Balance from './Balance'

const MainContent = () => {
    return (
        <div>
            <Routes>
                <Route path='/balance' element={<Dash />} />
                <Route path='balance' element={<Balance />} />
            </Routes>
        </div>
    )
}

export default MainContent