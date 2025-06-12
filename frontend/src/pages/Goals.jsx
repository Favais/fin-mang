import React, { useState } from 'react'
import Header from '../components/Header'
import { GrAchievement } from 'react-icons/gr'
import { GoGoal } from 'react-icons/go'
import { FiEdit3 } from "react-icons/fi";
import { FaHome, FaUtensils, FaCar, FaGamepad, FaShoppingBag, FaThLarge } from 'react-icons/fa';

import GaugeComponent from 'react-gauge-component'
import { AreaChart, CartesianGrid, XAxis, YAxis, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: '17 Sun', thisWeek: 60000, lastWeek: 50000 },
    { name: '18 Mon', thisWeek: 30000, lastWeek: 11000 },
    { name: '19 Tue', thisWeek: 20000, lastWeek: 50000 },
    { name: '20 Wed', thisWeek: 52000, lastWeek: 50000 },
    { name: '21 Thu', thisWeek: 51000, lastWeek: 12000 },
    { name: '22 Fri', thisWeek: 60000, lastWeek: 5000 },
    { name: '23 Sat', thisWeek: 50000, lastWeek: 12000 },
];

const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const budgetCategories = [
    {
        id: 1,
        name: 'Housing',
        amount: 250.00,
        icon: <FaHome className="text-xl text-gray-500" />,
    },
    {
        id: 2,
        name: 'Food',
        amount: 250.00,
        icon: <FaUtensils className="text-xl text-gray-500" />,
    },
    {
        id: 3,
        name: 'Transportation',
        amount: 250.00,
        icon: <FaCar className="text-xl text-gray-500" />,
    },
    {
        id: 4,
        name: 'Entertainment',
        amount: 250.00,
        icon: <FaGamepad className="text-xl text-gray-500" />,
    },
    {
        id: 5,
        name: 'Shopping',
        amount: 250.00,
        icon: <FaShoppingBag className="text-xl text-gray-500" />,
    },
    {
        id: 6,
        name: 'Others',
        amount: 250.00,
        icon: <FaThLarge className="text-xl text-gray-500" />,
    },
];

const Goals = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [target, setTarget] = useState(12)
    const handleMonthChange = (e) => setSelectedMonth(e.target.value);

    return (
        <div className='w-full bg-neutral-100 min-h-screen'>
            <Header />
            <p className='text-gray-500 text-xl py-4 px-3'>Goals</p>
            <div className='flex flex-col lg:flex-row gap-5 mx-2 md:mx-4 my-2'>
                <div className='flex flex-col gap-2 flex-1 min-w-0'>
                    <div className='py-5 px-4 md:px-6 gap-5 bg-white rounded h-full'>
                        <div className='flex flex-col gap-3'>
                            <div className='pb-3 flex items-center justify-between border-b-1 border-neutral-100 h-full'>
                                <p className='font-extrabold text-lg'>$20,000</p>
                                <p className='text-sm'>May, 2025</p>
                            </div>
                            <div className='flex flex-col sm:flex-row py-4 px-2 md:px-4 gap-5 rounded justify-between h-full'>
                                <div className='flex flex-col gap-6 flex-1'>
                                    <div className='flex gap-1'>
                                        <GrAchievement />
                                        <div>
                                            <p className='text-xs text-neutral-400'>Target Achieved</p>
                                            <p className='font-bold'>$12,000</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-1'>
                                        <GoGoal className='' />
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-xs'>This month Target</p>
                                            <p className='font-bold'>$20,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3.5 h-full items-center justify-center mt-4 sm:mt-0'>
                                    <GaugeComponent
                                        className=''
                                        style={{
                                            width: 128,
                                            height: 64
                                        }}
                                        type="semicircle"
                                        arc={{
                                            colorArray: ['#299D91', '#E8E8E8'],
                                            padding: 0,
                                            width: 0.23,
                                            subArcs:
                                                [
                                                    {
                                                        limit: target,
                                                    }, {

                                                    }
                                                ]
                                        }}
                                        pointer={{ type: "needle", color: '#299D91', animationDelay: 0 }}
                                        value={target}
                                        labels={{
                                            valueLabel: {
                                            }
                                        }}
                                        minValue={0}
                                        maxValue={20}
                                    />
                                    <p className='text-xs whitespace-nowrap'>Target vs Achievement</p>
                                </div>
                            </div>
                            <button className='flex gap-3 items-center py-2 px-5 rounded text-teal-600 border self-center'>
                                <p>Adjust Goal</p>
                                <FiEdit3 />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-white rounded-lg w-full flex-1 min-w-0 p-4 md:p-6'>
                    <div className='flex flex-col md:flex-row pb-4 justify-between gap-4'>
                        <div className='flex gap-4 md:gap-6 items-center'>
                            <p>Saving Summary</p>
                            <select name="" value={selectedMonth} onChange={handleMonthChange} id="" className="border rounded px-2 py-1">
                                {
                                    monthNames.map((month) => (
                                        <option value={month} key={month}>{month}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='flex gap-4 md:gap-6 flex-wrap'>
                            <div className='flex items-center gap-2'>
                                <p className='px-2 py-1 bg-teal-600 rounded-xl'></p>
                                <p className='text-sm text-neutral-400'>This month</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='px-2 py-1 bg-neutral-300 rounded-xl'></p>
                                <p className='text-sm text-neutral-400'>Same period last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-64 md:h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ left: 10 }}>
                                <defs>
                                    <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#9ca3af" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#9ca3af" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis padding={{ left: 50 }} tickFormatter={val => `$${val}`} />
                                <Tooltip formatter={(value) => `$${value}`} />
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <Area
                                    type="monotone"
                                    dataKey="lastWeek"
                                    stroke="#9ca3af"
                                    fillOpacity={1}
                                    fill="url(#colorLastMonth)"
                                    strokeDasharray="5 5"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="thisWeek"
                                    stroke="#0d9488"
                                    fillOpacity={1}
                                    fill="url(#colorThisMonth)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <p className='text-gray-500 text-xl py-4 px-3'>Expenses Goals by Category</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 md:mx-4">
                {budgetCategories.map((category) => (
                    <div key={category.id} className="flex justify-between items-center p-4 bg-white rounded-xl shadow">
                        <div className="flex items-center gap-3 py-3">
                            <div className='px-3 py-4 bg-neutral-100 rounded-lg'>
                                {category.icon}
                            </div>
                            <div>
                                <p className="text-gray-400">{category.name}</p>
                                <p className="font-bold">${category.amount.toFixed(2)}</p>
                            </div>
                        </div>
                        <button className="text-sm text-teal-600 border border-teal-500 px-3 py-1 rounded flex items-center gap-1 hover:bg-teal-50">
                            Adjust <span className="text-xs"><FiEdit3 /></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Goals
