import React from 'react'
import Header from '../components/Header'
import TopContent from '../components/TopContent'
import BottomContent from '../components/BottomContent'

const Dash = () => {
    return (
        <div className=' bg-gray-100 w-full'>
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