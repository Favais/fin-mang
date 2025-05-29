import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import creditCardData from '../assets/data'



const Balance = () => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        setAccounts(creditCardData)
    }, [])

    return (
        <div className='flex-1 bg-neutral-100'>
            <Header />
            <div className='flex gap-4 my-2 mx-5'>
                <p className='text-xl text-neutral-500'>Balance</p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    accounts.map((acc, i) => (
                        <div key={i} className='flex flex-col p-6 gap-4 bg-white m-3 rounded border-b-1 border-neutral-300'>
                            <div className='flex justify-between w-full pb-3'>
                                <p className='font-bold text-neutral-500'>{acc.type}</p>
                                <p className={`text-xs text-neutral-500`}>{acc.brand}</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-semibold'>{acc.maskedNumber}</p>
                                        <p className='text-xs text-neutral-400'>Account number</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-semibold'>{acc.currency}{acc.amount}</p>
                                        <p className='text-xs text-neutral-400'>Total Amount</p>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-teal-600 text-sm'>Remove</p>
                                    <button className='bg-teal-600 text-white px-5 py-2 rounded'>Details &gt;</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Balance