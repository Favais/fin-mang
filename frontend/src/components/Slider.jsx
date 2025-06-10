import React, { useContext } from 'react'
import { ManContext } from '../context/ManContext';
import { FaCcMastercard } from 'react-icons/fa';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const SliderSec = () => {

    const { user } = useContext(ManContext)

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute right-0 -bottom-10 text-sm cursor-pointer flex items-center gap-1 text-black"
                onClick={onClick}
            >&gt; Next </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute left-0 -bottom-10 text-sm cursor-pointer flex items-center gap-1 text-gray-400"
                onClick={onClick}
            >&lt; Previous</div>
        );
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => (
            <div style={{ marginTop: "10px" }}>
                <ul className="flex justify-center gap-2">{dots}</ul>
            </div>
        ),
        customPaging: () => <div className="dot w-2 h-2 rounded-full bg-gray-300" />,
    };

    return (
        <div className="relative w-full max-w-sm">
            {
                user?.accounts.length > 1 ? (
                    <Slider {...settings}>
                        {user?.accounts?.map((acc, idx) => (
                            <div key={idx} >
                                <div className='flex w-full py-4 px-4 rounded bg-teal-600 justify-between'>
                                    <div className='w-fit'>
                                        <p className='text-white opacity-80'>Account Type</p>
                                        <p className='text-white text-2xl font-bold'>{acc.accType}</p>
                                        <p className='text-white opacity-80'>**** **** **** 7645</p>
                                    </div>
                                    <div className='flex flex-col gap-3 w-fit items-end'>
                                        <FaCcMastercard className='size-12 text-white' />
                                        <p className='flex items-center  text-white text-md gap-3 font-bold'>${acc.balance.toLocaleString()} <BsArrowUpRightCircle className='size-5' /> </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    user?.accounts?.map((acc, idx) => (
                        <div key={idx} className='flex py-4 px-4 rounded bg-teal-600 justify-between'>
                            <div>
                                <p className='text-white opacity-80'>Account Type</p>
                                <p className='text-white text-2xl font-bold'>{acc.accType}</p>
                                <p className='text-white opacity-80'>**** **** **** 7645</p>
                            </div>
                            <div className='flex flex-col items-end gap-3 '>
                                <FaCcMastercard className='size-12 text-white' />
                                <p className='flex items-center  text-white text-md gap-3 font-bold'>${acc.balance.toLocaleString()} <BsArrowUpRightCircle className='size-5' /></p>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
}

export default SliderSec