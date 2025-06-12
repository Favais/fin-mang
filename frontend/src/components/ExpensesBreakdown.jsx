import React from 'react'
import { FaUtensils, FaBus, FaGamepad, FaShoppingBag, FaGift } from 'react-icons/fa'
import { FaHouse } from "react-icons/fa6";

const ExpensesBreakdown = () => {
    const expenseData = [
        {
            category: "Housing",
            total: 250,
            changePercent: 15,
            isIncrease: true,
            items: [
                { description: "House Rent", amount: 230, date: "17 May 2023" },
                { description: "Parking", amount: 20, date: "17 May 2023" }
            ]
        },
        {
            category: "Food",
            total: 350,
            changePercent: 8,
            isIncrease: false,
            items: [
                { description: "Grocery", amount: 230, date: "17 May 2023" },
                { description: "Restaurant bill", amount: 120, date: "17 May 2023" }
            ]
        },
        {
            category: "Transportation",
            total: 50,
            changePercent: 12,
            isIncrease: false,
            items: [
                { description: "Taxi Fare", amount: 30, date: "17 May 2023" },
                { description: "Metro Card bill", amount: 20, date: "17 May 2023" }
            ]
        },
        {
            category: "Entertainment",
            total: 80,
            changePercent: 15,
            isIncrease: true,
            items: [
                { description: "Movie ticket", amount: 30, date: "17 May 2023" },
                { description: "iTunes", amount: 50, date: "17 May 2023" }
            ]
        },
        {
            category: "Shopping",
            total: 420,
            changePercent: 25,
            isIncrease: true,
            items: [
                { description: "Shirt", amount: 230, date: "17 May 2023" },
                { description: "Jeans", amount: 190, date: "17 May 2023" }
            ]
        },
        {
            category: "Others",
            total: 50,
            changePercent: 23,
            isIncrease: true,
            items: [
                { description: "Donation", amount: 30, date: "17 May 2023" },
                { description: "Gift", amount: 20, date: "17 May 2023" }
            ]
        }
    ]

    const categoryIcons = {
        Housing: <FaHouse />,
        Food: <FaUtensils />,
        Transportation: <FaBus />,
        Entertainment: <FaGamepad />,
        Shopping: <FaShoppingBag />,
        Others: <FaGift />
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                expenseData.map((item, idx) => (
                    <div key={idx} className=''>
                        <div className='flex bg-neutral-200 px-5 py-4 justify-between rounded-t-lg'>
                            <div className='flex gap-3'>
                                <div className='flex py-4 px-3 bg-neutral-300 text-neutral-700 w-fit rounded-lg items-center'>
                                    {categoryIcons[item.category]}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-lg text-neutral-600'>{item.category}</p>
                                    <p className='text-lg font-bold'>${item.total}.00</p>
                                </div>
                            </div>
                            <div className='flex text-end flex-col gap-1 justify-end'>
                                <p className='text-lg text-neutral-600'>{item.isIncrease ? '▲' : '🔻'}{item.changePercent}%</p>
                                <p className='text-xs w-full text-neutral-600'>Compare to last month</p>
                            </div>
                        </div>
                        {
                            item.items.map((txn, txnIdx) => (
                                <div key={txnIdx} className='flex justify-between bg-white border-b border-neutral-100 p-2 rounded-b-lg'>
                                    <p className='py-6 px-4 font-semibold'>{txn.description}</p>
                                    <div className='p-3 flex flex-col items-end'>
                                        <p className='text-sm font-semibold'>${txn.amount}</p>
                                        <p className='text-neutral-500 text-xs'>{txn.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ExpensesBreakdown
