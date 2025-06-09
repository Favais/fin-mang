import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const EditProfile = ({ show, user, setShow }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            fullName: "",
            email: ""
        }
    })

    // Pre-fill the form when user data is available
    useEffect(() => {
        if (user) {
            reset({
                fullName: user.fullName,
                email: user.email,
                username: 'tanzir.rahman',
                phone: '+880 | 51547 58868',
            });
        }
    }, [user, reset]);

    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div>
            {
                show &&
                <div className='bg-black/30 fixed inset-0 z-50 flex items-center justify-center'>
                    <div className='relative flex flex-col py-10 px-44 bg-white rounded-lg'>
                        <div onClick={() => setShow(false)} className='absolute right-10 text-2xl cursor-pointer'>
                            X
                        </div>
                        <p className='text-neutral-500 text-2xl p-6 font-semibold'>Update profile details</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className='p-4'>Name:</label>
                                <input
                                    type="text"
                                    {...register("fullName", { required: "Name is required" })}
                                    className="  p-3 w-full bg-transGreen-100 rounded"
                                />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className='p-4'>Email:</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className=" p-3 w-full bg-transGreen-100 rounded"
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className='p-4'>Username:</label>
                                <input
                                    type="text"
                                    {...register("username", { required: "Email is required" })}
                                    className=" p-3 w-full bg-transGreen-100 rounded"
                                />
                            </div>
                            <div>
                                <label className='p-4'>Phone Number:</label>
                                <input
                                    type="tel"
                                    {...register("phone", { required: "Email is required" })}
                                    className="p-3 w-full bg-transGreen-100 rounded"
                                />
                            </div>

                            <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default EditProfile