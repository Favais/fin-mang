import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Graph from './graph';

const Statistics = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <p className='text-xl text-neutral-400'>Statistics</p>
            </div>
            <div className='bg-white px-6 pt-4 pb-10 flex flex-col gap-3.5 rounded'>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Weekly Comparison  ▽</p>
                    <div className='flex gap-6'>
                        <p className='flex items-center gap-2'><span className='bg-teal-600 rounded-xs w-4 h-2'></span>This week</p>
                        <p className='flex items-center gap-2'><span className='bg-neutral-200 rounded-xs w-4 h-2'></span>Last week</p>
                    </div>
                </div>

                <div>
                    <Graph />
                </div>
            </div>
        </div>
    )
}

export default Statistics