import React from 'react'
import RecentTransaction from './RecentTransaction'
import Statistics from './Statistics'
import Expenses from './Expenses'

const BottomContent = () => {
    return (
        <div className='flex  gap-6 my-6 mx-5'>
            <RecentTransaction />
            <div className='flex flex-col flex-2/3 gap-6'>
                <Statistics />
                <Expenses />
            </div>
        </div>
    )
}

export default BottomContent