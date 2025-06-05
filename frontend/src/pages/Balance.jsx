import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { creditCardData } from '../assets/data'
import { ManContext } from '../context/manContext'
import { Link, Outlet } from 'react-router-dom'



const Balance = () => {

    const { user, token, getUser } = useContext(ManContext)

    useEffect(() => {
        if (token) {
            getUser()
        }
    }, [token])


    return (
        <div className='flex-1 bg-neutral-100'>
            <Header />
            <div className='flex gap-4 my-2 mx-5'>
                <p className='text-xl text-neutral-500'>Balance</p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    user?.accounts?.map((acc, i) => (
                        <div key={i} className='flex flex-col p-6 gap-4 bg-white m-3 rounded border-b-1 border-neutral-300'>
                            <div className='flex justify-between w-full pb-3'>
                                <p className='font-bold text-neutral-500'>{acc.accType}</p>
                                <p className={`text-xs text-neutral-500`}>{acc.bank}</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-semibold'>{acc.accountNumber}</p>
                                        <p className='text-xs text-neutral-400'>Account number</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-semibold'>{acc.currency} {acc.balance}</p>
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
                <div className='flex flex-col p-6 gap-3 bg-white m-3 rounded border-b-1 border-neutral-300 justify-center items-center'>
                    <Link to='/dashboard/balance/add' className='px-10 py-2 text-white bg-teal-600'>Add Account</Link>
                    <Link to='/dashboard/balance/edit' className='px-10 py-2 text-neutral-500'>Edit Account</Link>
                </div>
            </div>
        </div>
    )
}

export default Balance