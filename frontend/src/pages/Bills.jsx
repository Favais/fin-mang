import React, { useContext } from 'react'
import Header from '../components/Header'
import { ManContext } from '../context/ManContext';

const Bills = () => {

    const { currency } = useContext(ManContext)

    const upcomingBills = [
        {
            id: 1,
            name: "Electricity Bill",
            category: "Utilities",
            description: "Monthly electricity usage for home",
            dueDate: "2025-06-10",
            lastCharge: {
                amount: 68.40,
                date: "2025-05-10"
            },
            paymentMethod: "Auto-debit – Bank Account (****1234)",
            amountDue: 72.15
        },
        {
            id: 2,
            name: "Netflix Subscription",
            category: "Subscriptions",
            description: "Netflix Standard Plan (2 screens)",
            dueDate: "2025-06-12",
            lastCharge: {
                amount: 15.49,
                date: "2025-05-12"
            },
            paymentMethod: "Credit Card (****5678)",
            amountDue: 15.49
        },
        {
            id: 3,
            name: "Car Insurance",
            category: "Insurance",
            description: "Monthly premium for personal vehicle coverage",
            dueDate: "2025-06-15",
            lastCharge: {
                amount: 98.20,
                date: "2025-05-15"
            },
            paymentMethod: "Auto-debit – Checking Account (****9876)",
            amountDue: 98.20
        }
    ];

    return (
        <div className='flex-1 bg-neutral-100'>
            <Header />
            <p className='text-lg text-neutral-400 pl-5 py-4'>Upcoming Bills</p>
            <div className='py-4 px-8 bg-white mx-5 rounded-lg'>
                <div className='grid grid-cols-[1fr_1fr_2fr_1.2fr_1.5fr_1fr]'>
                    <p className='text-sm font-semibold'>Due Date</p>
                    <p className='text-sm font-semibold'>Category</p>
                    <p className='text-sm font-semibold'>Item Description</p>
                    <p className='text-sm font-semibold'>Last Charge</p>
                    <p className='text-sm font-semibold'>Payment Method</p>
                    <p className='flex justify-end text-sm font-semibold'>Amount</p>
                </div>
                {
                    upcomingBills.map((item, idx) => (
                        <div key={idx} className='grid grid-cols-[1fr_1fr_2fr_1.2fr_1.5fr_1fr] py-6 border-b border-neutral-100 pr-6]'>
                            <div className='bg-neutral-100 w-fit px-3 py-2 rounded-lg'>
                                <p className='text-center text-sm text-neutral-500'>{new Date(item.dueDate).toLocaleString('default', { month: 'long' })}</p>
                                <p className='text-center font-semibold text-lg text-neutral-700'>{new Date(item.dueDate).toLocaleString('default', { day: '2-digit' })}</p>
                            </div>
                            <p className='flex items-center text-sm'>{item.category}</p>
                            <p className='text-sm font-semibold'>{item.description}</p>
                            <div className='flex flex-col'>
                                <p className='text-sm'>{currency}{item.lastCharge.amount}</p>
                                <p className='text-sm'>{item.lastCharge.date}</p>
                            </div>
                            <p>{item.paymentMethod}</p>
                            <p className='flex justify-end'>{currency}{item.amountDue}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Bills