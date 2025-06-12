import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ManContext } from '../context/ManContext'
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios';

const NewTransaction = ({ show, setShow, onSuccess }) => {
    const { register, handleSubmit } = useForm()
    const { user, currency, token, backendUrl } = useContext(ManContext)
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        if (user) {
            setAccounts(user?.accounts)
        }
    }, [user])

    if (!show) {
        return null
    }

    const submitHandler = async (formData) => {
        const res = await axios.post(backendUrl + '/trx/credit', formData, { headers: { token } })
        if (res.data.success) {
            setShow(false)
            onSuccess()
        }
    }
    return (
        <div className='bg-black/30 items-center justify-center flex z-50 fixed inset-0'>
            <div className='bg-white px-4 py-8 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-10 md:pb-12 gap-8 relative rounded w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-2 sm:mx-auto'>
                <div className='absolute right-4 sm:right-8 md:right-12 top-4 sm:top-8 cursor-pointer text-lg' onClick={() => setShow(false)}>
                    <IoCloseSharp size={30} />
                </div>
                <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='' htmlFor="transactionType"> Select transaction type</label>
                        <select className='px-4 py-3 sm:px-6 sm:py-4 border border-neutral-300 rounded-lg' {...register('transactionType')} id="">
                            <option value="" disabled>Select transaction type</option>
                            <option value="credit">Credit</option>
                            <option value="debit">Debit</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="fromAccount">Select from Account</label>
                        <select className='px-4 py-3 sm:px-6 sm:py-4 border border-neutral-300 rounded-lg' {...register('fromAccount')} id="">
                            {
                                accounts?.map((acc, idx) => (
                                    <option key={idx} value={acc._id}>{acc.accType}-{acc.bank}-{acc.accountNumber}-{currency}{acc.balance}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="">To account number</label>
                            <input className='px-4 py-3 sm:px-6 sm:py-4 border border-neutral-300 rounded-lg' type="number" {...register('toAccount.accountNumber')} />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="">Bank name</label>
                            <input className='px-4 py-3 sm:px-6 sm:py-4 border border-neutral-300 rounded-lg' type="text" {...register('toAccount.bankName')} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="description">Description</label>
                        <input className='px-4 py-3 sm:px-6 sm:py-4 border border-neutral-300 rounded-lg' type="text" {...register('description')} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="amount">Amount</label>
                        <input className='px-4 py-3 sm:px-6 sm:py-4 border border-neutral-300 rounded-lg' type="number" {...register('amount')} />
                    </div>
                    <button className='py-4 sm:py-6 px-4 bg-teal-600 rounded-lg text-white' type='submit'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default NewTransaction
