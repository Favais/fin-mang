import React from 'react'
import { GrTransaction } from "react-icons/gr";

const expensesData = [
    { label: "Housing", amount: "$280.00", percent: "15%*" },
    { label: "Food", amount: "$150.00", percent: "10%*" },
    { label: "Transport", amount: "$90.00", percent: "8%*" },
    { label: "Utilities", amount: "$60.00", percent: "5%*" },
    { label: "Entertainment", amount: "$40.00", percent: "3%*" },
    { label: "Other", amount: "$30.00", percent: "2%*" },
];

const Expenses = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-end flex-wrap gap-2'>
                <p className='text-xl text-neutral-400'>Expenses Breakdown</p>
                <p className='text-xs text-neutral-400'>*Compare to last month</p>
            </div>
            <div className='py-5 px-2 sm:px-4 md:px-6 bg-white'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                    {expensesData.map((item, idx) => (
                        <div key={idx} className='flex px-2 sm:px-4 py-2 gap-4 items-center'>
                            <div className='py-5 px-3 rounded-lg bg-neutral-100 flex-shrink-0'>
                                <GrTransaction />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xs text-neutral-500'>{item.label}</p>
                                <p className='font-bold'>{item.amount}</p>
                                <p className='text-xs text-neutral-500'>{item.percent}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expenses
