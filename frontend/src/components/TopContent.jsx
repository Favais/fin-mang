import React, { useContext, useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { GaugeComponent } from 'react-gauge-component';
import { ManContext } from '../context/ManContext';
import SliderSec from './Slider';

const TopContent = () => {
    const [target, setTarget] = useState(12)
    const { getBal, currency } = useContext(ManContext)
    const balance = getBal()

    return (
        <div className='flex flex-col gap-6 my-2 mx-2 md:mx-5 md:flex-row'>
            <div className='flex flex-col gap-2 w-full md:w-1/3 h-full'>
                <p className='text-gray-500 text-xl'>Total Balance</p>
                <div className='py-5 px-4 md:px-6 gap-5 bg-white rounded'>
                    <div className='flex flex-col gap-3 pb-7'>
                        <div className='pb-3 flex items-center justify-between border-b-1 border-neutral-100 '>
                            <p className='font-extrabold text-lg'>{currency}{balance?.toLocaleString()}</p>
                            <p className='text-sm'>All Account</p>
                        </div>
                        <div>
                            <SliderSec />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-full md:w-1/3'>
                <p className='text-gray-500 text-xl'>Goals</p>
                <div className='py-5 px-4 md:px-6 gap-5 bg-white rounded h-full'>
                    <div className='flex flex-col gap-3'>
                        <div className='pb-3 flex items-center justify-between border-b-1 border-neutral-100 h-full'>
                            <p className='font-extrabold text-lg'>$20,000</p>
                            <p className='text-sm'>May, 2025</p>
                        </div>
                        <div className='flex flex-col md:flex-row py-4 px-2 md:px-4 gap-5 rounded justify-between h-full'>
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
                            <div className='flex flex-col gap-3.5 h-full items-center md:items-start'>
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
                                        subArcs: [
                                            { limit: target }, {}
                                        ]
                                    }}
                                    pointer={{ type: "needle", color: '#299D91', animationDelay: 0 }}
                                    value={target}
                                    labels={{
                                        valueLabel: {}
                                    }}
                                    minValue={0}
                                    maxValue={20}
                                />
                                <p className='text-xs whitespace-nowrap'>Target vs Achievement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-2 w-full md:w-1/3'>
                <p className='text-gray-500 text-xl'>Upcoming Bills</p>
                <div className='py-6 px-4 md:px-6 rounded bg-white h-full shadow-neutral-700'>
                    <div className='pt-2 pb-5 flex sm:flex-row items-start sm:items-center border-b-1 border-neutral-200 justify-between gap-3'>
                        <div className='flex gap-3'>
                            <div className='bg-neutral-100 py-2 px-2 gap-1 flex flex-col rounded items-center'>
                                <p className='text-xs'>May</p>
                                <p className='font-extrabold text-lg'>26</p>
                            </div>
                            <div>
                                <p>Figma</p>
                                <p className='font-bold text-neutral-700'>Figma - Monthly</p>
                                <p className='text-xs text-neutral-400'>Last Charge - 14 May, 2022</p>
                            </div>
                        </div>
                        <div className='py-2 px-3 border border-neutral-200 rounded '>
                            <p className='font-bold'>$150</p>
                        </div>
                    </div>
                    <div className='pt-2 pb-5 flex sm:flex-row items-start sm:items-center justify-between gap-3'>
                        <div className='flex gap-3'>
                            <div className='bg-neutral-100 py-2 px-2 gap-1 flex flex-col rounded items-center'>
                                <p className='text-xs'>Jun</p>
                                <p className='font-extrabold text-lg'>26</p>
                            </div>
                            <div>
                                <p>Adobe</p>
                                <p className='font-bold text-neutral-700'>Adobe - Yearly</p>
                                <p className='text-xs text-neutral-400'>Last Charge - 14 May, 2023</p>
                            </div>
                        </div>
                        <div className='py-2 px-3 border border-neutral-200 rounded '>
                            <p className='font-bold'>$559</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContent
