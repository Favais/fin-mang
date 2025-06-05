import React, { useContext } from 'react'
import { GrTransaction } from "react-icons/gr";
import { ManContext } from '../context/manContext';

const RecentTransaction = () => {

    const { token, user, transactions, currency } = useContext(ManContext)


    return (
        <div className='flex flex-col flex-1/3'>
            <div className='flex justify-between items-center'>
                <p className='text-xl text-neutral-400'>Recent Transaction</p>
                <p className='text-neutral-400 text-xs'>View all &gt;</p>
            </div>
            <div className='px-6 pt-4 pb-8 gap-3 flex flex-col bg-white rounded'>
                <div className='flex gap-5'>
                    <p className='p-2 font-bold text-teal-600 border-b-2 border-teal-600'>All</p>
                    <p className='p-2 font-bold text-neutral-600'>Revenue</p>
                    <p className='p-2 font-bold text-neutral-600'>Expenses</p>
                </div>
                <div>
                    {
                        transactions?.slice(0, 5).map((txn, idx) => (
                            <div key={idx} className='flex py-6 gap-7 justify-between border-b border-neutral-100'>
                                <div className='flex items-center gap-4'>
                                    <div className='py-2 px-2 bg-neutral-100 rounded-sm'>
                                        <GrTransaction />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>{txn.description}</p>
                                        <p className='text-xs text-neutral-400'>{txn.toAccount.accountNumber} - {txn.toAccount.bankName}</p>
                                    </div>
                                </div>
                                <div className='flex items-end flex-col'>
                                    <p className='text-neutral-700'>{currency}{txn.amount}</p>
                                    <p className='text-xs text-neutral-500'>{new Date(txn.date).toLocaleString()}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className='flex py-6 gap-7 justify-between border-b border-neutral-100'>
                        <div className='flex items-center gap-4'>
                            <div className='py-2 px-2 bg-neutral-100 rounded-sm'>
                                <GrTransaction />
                            </div>
                            <div>
                                <p className='font-semibold'>GTR 5</p>
                                <p className='text-xs text-neutral-400'>Gadget & Gear</p>
                            </div>
                        </div>
                        <div className='flex items-end flex-col'>
                            <p className='text-neutral-700'>$160.00</p>
                            <p className='text-xs text-neutral-500'>27 May 2025</p>
                        </div>
                    </div>
                    <div className='flex py-6 gap-7 justify-between border-b border-neutral-100'>
                        <div className='flex items-center gap-4'>
                            <div className='py-2 px-2 bg-neutral-100 rounded-sm'>
                                <GrTransaction />
                            </div>
                            <div>
                                <p className='font-semibold'>GTR 5</p>
                                <p className='text-xs text-neutral-400'>Gadget & Gear</p>
                            </div>
                        </div>
                        <div className='flex items-end flex-col'>
                            <p className='text-neutral-700'>$160.00</p>
                            <p className='text-xs text-neutral-500'>27 May 2025</p>
                        </div>
                    </div>
                    <div className='flex py-6 gap-7 justify-between border-b border-neutral-100'>
                        <div className='flex items-center gap-4'>
                            <div className='py-2 px-2 bg-neutral-100 rounded-sm'>
                                <GrTransaction />
                            </div>
                            <div>
                                <p className='font-semibold'>GTR 5</p>
                                <p className='text-xs text-neutral-400'>Gadget & Gear</p>
                            </div>
                        </div>
                        <div className='flex items-end flex-col'>
                            <p className='text-neutral-700'>$160.00</p>
                            <p className='text-xs text-neutral-500'>27 May 2025</p>
                        </div>
                    </div>
                    <div className='flex py-6 gap-7 justify-between border-b border-neutral-100'>
                        <div className='flex items-center gap-4'>
                            <div className='py-2 px-2 bg-neutral-100 rounded-sm'>
                                <GrTransaction />
                            </div>
                            <div>
                                <p className='font-semibold'>GTR 5</p>
                                <p className='text-xs text-neutral-400'>Gadget & Gear</p>
                            </div>
                        </div>
                        <div className='flex items-end flex-col'>
                            <p className='text-neutral-700'>$160.00</p>
                            <p className='text-xs text-neutral-500'>27 May 2025</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default RecentTransaction