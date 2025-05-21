import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}

export default Home