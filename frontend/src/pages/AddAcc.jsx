import React, { useContext } from 'react'
import Header from '../components/Header'
import { useForm } from 'react-hook-form'
import { Navigate, NavLink } from 'react-router-dom'
import { ManContext } from '../context/ManContext'
import axios from 'axios'

const AddAcc = () => {

    const { register, handleSubmit } = useForm()
    const { backendUrl, token, navigate } = useContext(ManContext)

    const onSubmit = async (formData) => {
        const bal = await axios.post(backendUrl + '/acc/bal', formData, { headers: { token } })
        navigate('/dashboard/balance')
    }
    return (
        <div className='w-full px-5 bg-neutral-100'>
            <Header />
            <div>
                <p className='py-2 text-lg text-neutral-400'>Add an Account</p>
                <div className='bg-white px-4 py-2 rounded-lg flex flex-col gap-4'>
                    <div className='flex gap-2'>
                        <NavLink to='/dashboard/balance/add' className={({ isActive }) => `px-3 py-5 text-sm text-neutral-500 ${isActive ? 'border-b-2 border-teal-600' : ''}`}>Add Account</NavLink>
                        <NavLink to='/dashboard/balance/edit' className={({ isActive }) => `px-3 py-5 text-sm text-neutral-500 ${isActive ? 'border-b-2 border-teal-600' : ''}`}>Edit Account</NavLink>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-1/2 py-3 px-4 gap-3'>
                        <label className='py-3 px-4 w-full'>
                            <p className='pb-2 text-sm'>Bank Name</p>
                            <input className='py-4 px-4 w-full placeholder-mutedGreen-100 bg-transGreen-100 rounded-lg text-neutral-600' {...register('bank')} type="text" placeholder='Enter bank name' />
                        </label>
                        <label className='py-3 px-4 w-full'>
                            <p className='pb-2 text-sm'>Starting Balance</p>
                            <input className='py-4 px-4 w-full placeholder-mutedGreen-100 bg-transGreen-100 rounded-lg text-neutral-600' {...register('balance')} type="number" placeholder='Starting Balance' />
                        </label>
                        <label className='py-3 px-4 w-full'>
                            <p className='pb-2 text-sm'>Account Number</p>
                            <input className='py-4 px-4 w-full placeholder-mutedGreen-100 bg-transGreen-100 rounded-lg text-neutral-600' {...register('accountNumber')} type="number" placeholder='Account Number' />
                        </label>
                        <label className='py-3 px-4 w-full'>
                            <p className='pb-2 text-sm'>Currency</p>
                            <input className='py-4 px-4 w-full placeholder-mutedGreen-100 bg-transGreen-100 rounded-lg text-neutral-600' {...register('currency')} type="text" placeholder='Currency' />
                        </label>
                        <label className='text-sm px-4 pb-2' htmlFor="accType">Account Type</label>

                        <div className='py-3 px-4'>
                            <select {...register('accType')} className='bg-transGreen-100 placeholder-mutedGreen-100 text-neutral-600 px-4 py-4 w-full rounded-lg' id="accType" placeholder='Select account type'>
                                <option value="Saving">Savings</option>
                                <option value="Checking">Checking</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Loan">Loan</option>
                                <option value="Investment">Investment</option>
                            </select>
                        </div>

                        <button type='submit' className='bg-teal-600 py-2 px-5 text-white rounded-lg w-full'>Add</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddAcc