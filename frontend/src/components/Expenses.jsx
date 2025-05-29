import React from 'react'
import { GrTransaction } from "react-icons/gr";


const Expenses = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-end'>
                <p className='text-xl text-neutral-400'>Expenses Breakdown</p>
                <p className='text-xs text-neutral-400'>*Compare to last month</p>
            </div>
            <div className='py-5 px-6 bg-white'>
                <div className='grid grid-cols-3'>
                    <div className='flex px-4 py-2 gap-4 '>
                        <div className='py-5 px-3 rounded-lg bg-neutral-100'>
                            <GrTransaction />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xs text-neutral-500'>Housing</p>
                            <p className='font-bold'>$280.00</p>
                            <p className='text-xs text-neutral-500'>15%*</p>
                        </div>
                    </div>
                    <div className='flex px-4 py-2 gap-4'>
                        <div className='py-5 px-3 rounded-lg bg-neutral-100'>
                            <GrTransaction />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xs text-neutral-500'>Housing</p>
                            <p className='font-bold'>$280.00</p>
                            <p className='text-xs text-neutral-500'>15%*</p>
                        </div>
                    </div>
                    <div className='flex px-4 py-2 gap-4'>
                        <div className='py-5 px-3 rounded-lg bg-neutral-100'>
                            <GrTransaction />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xs text-neutral-500'>Housing</p>
                            <p className='font-bold'>$280.00</p>
                            <p className='text-xs text-neutral-500'>15%*</p>
                        </div>
                    </div>
                    <div className='flex px-4 py-2 gap-4'>
                        <div className='py-5 px-3 rounded-lg bg-neutral-100'>
                            <GrTransaction />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xs text-neutral-500'>Housing</p>
                            <p className='font-bold'>$280.00</p>
                            <p className='text-xs text-neutral-500'>15%*</p>
                        </div>
                    </div>
                    <div className='flex px-4 py-2 gap-4'>
                        <div className='py-5 px-3 rounded-lg bg-neutral-100'>
                            <GrTransaction />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xs text-neutral-500'>Housing</p>
                            <p className='font-bold'>$280.00</p>
                            <p className='text-xs text-neutral-500'>15%*</p>
                        </div>
                    </div>
                    <div className='flex px-4 py-2 gap-4'>
                        <div className='py-5 px-3 rounded-lg bg-neutral-100'>
                            <GrTransaction />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xs text-neutral-500'>Housing</p>
                            <p className='font-bold'>$280.00</p>
                            <p className='text-xs text-neutral-500'>15%*</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expenses