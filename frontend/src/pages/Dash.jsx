import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import TopContent from '../components/TopContent'
import BottomContent from '../components/BottomContent'
import { ManContext } from '../context/ManContext'

const Dash = () => {
    const { collapsed } = useContext(ManContext)
    return (
        <div className={`bg-gray-100  w-full ${collapsed ? 'ml-14 md:ml-52' : 'ml-40 hidden md:ml-56'}`}>
            {/* Header */}
            <Header />
            {/* Top-content */}
            <TopContent />
            {/* Bottom-content */}
            <BottomContent />
        </div>
    )
}

export default Dash