import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import { ManContext } from '../context/ManContext'
import { Link } from 'react-router-dom'

const Balance = () => {
    const { user, token, getUser } = useContext(ManContext)

    useEffect(() => {
        if (token) {
            getUser()
        }
    }, [token])

    return (
        <div className='flex-1 bg-neutral-100 min-h-screen'>
            <Header />
            <div className='flex gap-4 my-2 mx-5'>
                <p className='text-xl text-neutral-500'>Balance</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-3'>
                {
                    user?.accounts?.map((acc, i) => (
                        <div key={i} className='flex flex-col p-6 gap-4 bg-white rounded border-b-1 border-neutral-300'>
                            <div className='flex justify-between w-full pb-3'>
                                <p className='font-bold text-neutral-500'>{acc.accType}</p>
                                <p className='text-xs text-neutral-500'>{acc.bank}</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-semibold break-all'>{acc.accountNumber}</p>
                                        <p className='text-xs text-neutral-400'>Account number</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-semibold'>{acc.currency} {acc.balance}</p>
                                        <p className='text-xs text-neutral-400'>Total Amount</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-teal-600 text-sm cursor-pointer'>Remove</p>
                                    <button className='bg-teal-600 text-white px-5 py-2 rounded'>Details &gt;</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className='flex flex-col p-6 gap-3 bg-white rounded border-b-1 border-neutral-300 justify-center items-center'>
                    <Link to='/dashboard/balance/add' className='px-10 py-2 text-white bg-teal-600 rounded w-full text-center'>Add Account</Link>
                    <Link to='/dashboard/balance/edit' className='px-10 py-2 text-neutral-500 rounded w-full text-center'>Edit Account</Link>
                </div>
            </div>
        </div>
    )
}

export default Balance
