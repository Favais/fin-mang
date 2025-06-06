import React, { useContext } from 'react'
import { Navigate, Outlet, replace } from 'react-router-dom'
import { ManContext } from '../context/ManContext'

const Auth = () => {

    const { token } = useContext(ManContext)
    const storedToken = token || localStorage.getItem('token')
    return storedToken ? <Outlet /> : <Navigate to='/login' replace />
}

export default Auth