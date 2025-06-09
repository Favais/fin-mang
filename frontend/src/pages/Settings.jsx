import React, { useState } from 'react'
import Header from '../components/Header'
import { FaUpload } from 'react-icons/fa6';
import EditProfile from '../components/EditProfile';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('account');
    const [showUpdateProfile, setShowUpdateProfile] = useState(false)

    const user = {
        fullName: 'Tanzir Rahman',
        email: 'tanzir.rahman@email.com',
        username: 'tanzir.rahman',
        phone: '+880 | 51547 58868',
    };
    return (
        <div className='w-full bg-neutral-100'>
            <Header />
            <div className="bg-white p-6 rounded-lg shadow-md mx-5 max-w-5xl mt-10">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                    <button
                        className={`mr-6 pb-2 border-b-2 ${activeTab === 'account' ? 'border-teal-600 text-teal-600 font-semibold' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('account')}
                    >
                        Account
                    </button>
                    <button
                        className={`pb-2 border-b-2 ${activeTab === 'security' ? 'border-teal-600 text-teal-600 font-semibold' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('security')}
                    >
                        Security
                    </button>
                </div>

                {/* Account Form */}
                {activeTab === 'account' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* User Info */}
                        <div className="flex flex-col">
                            <div className='p-2'>
                                <p className="text-sm text-gray-500 ">Full name</p>
                                <p className="font-medium px-3 py-3">{user.fullName}</p>
                            </div>
                            <div className='p-2'>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium px-3 py-3">{user.email}</p>
                            </div>
                            <div className='p-2'>
                                <p className="text-sm text-gray-500">Username</p>
                                <p className="font-medium px-3 py-3">{user.username}</p>
                            </div>
                            <div className='p-2'>
                                <p className="text-sm text-gray-500">Phone Number</p>
                                <p className="font-medium px-3 py-3">{user.phone}</p>
                            </div>

                            <button onClick={() => {
                                setShowUpdateProfile(true)
                                console.log(showUpdateProfile);

                            }}
                                className="mt-6 w-max bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700 text-sm">
                                Update Profile
                            </button>
                        </div>

                        {/* Upload Profile Picture */}
                        <div className="flex flex-col items-center justify-start">
                            <p className="text-sm text-gray-600 mb-2">Your Profile Picture</p>
                            <label
                                htmlFor="profileUpload"
                                className="border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer flex flex-col items-center justify-center text-gray-500 hover:border-teal-500 hover:text-teal-600"
                            >
                                <FaUpload className="text-2xl mb-2" />
                                <p className="text-sm">Upload your photo</p>
                                <input type="file" id="profileUpload" className="hidden" />
                            </label>
                        </div>
                        <EditProfile show={showUpdateProfile} setShow={setShowUpdateProfile} user={user} />
                    </div>
                )}

                {/* Optional: Security Tab */}
                {activeTab === 'security' && (
                    <div className="text-gray-500 italic">Security settings will go here...</div>
                )}
            </div>
        </div>
    )
}

export default Settings