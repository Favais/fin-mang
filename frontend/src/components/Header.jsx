import { FaAnglesRight } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ManContext } from '../context/ManContext';
import React, { useContext, useState, useRef, useEffect } from 'react'

const Header = () => {
    const { user } = useContext(ManContext)
    const [showSearch, setShowSearch] = useState(false)
    const searchRef = useRef(null)

    // Close search input when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(false)
            }
        }
        if (showSearch) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [showSearch])

    return (
        <div>
            <div className='flex pl-4 md:pl-6 pr-4 md:pr-8 py-4 md:py-5 justify-between items-start md:items-center border-b border-gray-200 gap-4 md:gap-0'>
                <div className='flex md:flex-row gap-2 md:gap-6 items-start md:items-center'>
                    <p className='font-bold text-lg md:text-2xl'>{`Hello ${user?.firstName}`}</p>
                    <div className='flex items-center gap-1'>
                        <FaAnglesRight className='text-gray-400' />
                        <p className='text-xs md:text-sm text-gray-400'>May 25, 2025</p>
                    </div>
                </div>
                <div className='flex gap-4 md:gap-10 items-center relative w-full md:w-auto'>
                    <FaBell className='text-lg md:text-xl' />
                    <div className="relative w-full md:w-auto flex items-center" ref={searchRef}>
                        {!showSearch && (
                            <button
                                className="p-2"
                                onClick={() => setShowSearch(true)}
                                aria-label="Show search"
                                type="button"
                            >
                                <CiSearch className='text-gray-400 text-xl' />
                            </button>
                        )}
                        {showSearch && (
                            <div className="relative w-full md:w-48">
                                <input
                                    autoFocus
                                    className='bg-white w-full md:w-48 text-xs md:text-sm text-gray-700 rounded pl-8 pr-12 py-2 border border-gray-200 focus:outline-none'
                                    type="search"
                                    placeholder='Search here'
                                />
                                <CiSearch className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header