import React, { useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { GaugeComponent } from 'react-gauge-component';





const TopContent = () => {
    const [target, setTarget] = useState(12)

    return (
        <div className='flex gap-6 my-2 mx-5'>
            <div className='flex flex-col gap-2 flex-1 h-full'>
                <p className='text-gray-500 text-xl'>Total Balance</p>
                <div className='py-5 px-6 gap-5 bg-white rounded'>
                    <div className='flex flex-col gap-3'>
                        <div className='pb-3 flex items-center justify-between border-b-1 border-neutral-100 '>
                            <p className='font-extrabold text-lg'>$200,000</p>
                            <p className='text-sm'>All Account</p>
                        </div>
                        <div className=' flex py-4 px-4 rounded bg-teal-600 justify-between'>
                            <div>
                                <p className='text-white opacity-80'>Account Type</p>
                                <p className='text-white text-2xl font-bold'>Credit Card</p>
                                <p className='text-white opacity-80'>**** **** **** 7645</p>
                            </div>
                            <div className='flex flex-col items-end gap-3 '>
                                <FaCcMastercard className='size-12 text-white' />
                                <p className='flex items-center  text-white text-md gap-3 font-bold'>$25000 <BsArrowUpRightCircle className='size-5' /> </p>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <p className='text-neutral-300'>&lt; Previous</p>
                            <div className='flex gap-2'>
                                <p className='text-teal-600  text-center rounded-full'>&bull;</p>
                                <p className='text-neutral-400  text-center rounded-full'>&bull;</p>
                                <p className='text-neutral-400  text-center rounded-full'>&bull;</p>
                            </div>
                            <p>Next &gt;</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
                <p className='text-gray-500 text-xl'>Goals</p>
                <div className='py-5 px-6 gap-5 bg-white rounded h-full'>
                    <div className='flex flex-col gap-3'>
                        <div className='pb-3 flex items-center justify-between border-b-1 border-neutral-100 h-full'>
                            <p className='font-extrabold text-lg'>$20,000</p>
                            <p className='text-sm'>May, 2025</p>
                        </div>
                        <div className=' flex py-4 px-4 gap-5 rounded justify-between h-full'>
                            <div className='flex flex-col gap-6 flex-1/2'>
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
                            <div className='flex flex-col gap-3.5 h-full'>
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

                    </div>

                </div>
            </div>
            <div className='flex flex-col flex-1 gap-2'>
                <p className='text-gray-500 text-xl'>Upcoming Bills</p>
                <div className='py-6 px-6 rounded bg-white h-full  shadow-neutral-700'>
                    <div className='pt-2 pb-5 flex items-center border-b-1 border-neutral-200 justify-between'>
                        <div className='flex gap-3 '>
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
                    <div className='pt-2 pb-5 flex items-center  justify-between'>
                        <div className='flex gap-3 '>
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