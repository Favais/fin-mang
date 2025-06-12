import React from 'react'
import RecentTransaction from './RecentTransaction'
import Statistics from './Statistics'
import Expenses from './Expenses'

const BottomContent = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 my-6 mx-5">
            <RecentTransaction className="w-full lg:w-1/3" />
            <div className="flex flex-col gap-6 w-full lg:w-2/3">
                <Statistics />
                <Expenses />
            </div>
        </div>
    )
}

export default BottomContent