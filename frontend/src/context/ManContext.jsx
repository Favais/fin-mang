import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Make sure to install react-toastify and import CSS

export const ManContext = createContext()

const ManContextProvider = ({ children }) => {
    const [token, setToken] = useState('')
    const [currency, setCurrency] = useState('$')
    const [user, setUser] = useState()
    const [totalBal, setTotalBal] = useState()
    const [transactions, setTransactions] = useState()

    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    console.log(backendUrl);

    const getTransaction = async () => {
        try {
            const res = await axios.post(backendUrl + '/trx/list', {}, { headers: { token } })
            if (res.data && res.data.transactions) {
                setTransactions(res.data.transactions)
                toast.success("Transactions loaded successfully")
            } else {
                toast.error("Failed to load transactions")
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error loading transactions")
        }
    }

    const getUser = async () => {
        try {
            if (token) {
                const res = await axios.get(backendUrl + '/acc/user', { headers: { token } })
                const userData = res.data.userData
                if (userData) {
                    setUser(userData)
                    toast.success("User loaded successfully")
                } else {
                    toast.error("Failed to load user data")
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error loading user data")
        }
    }

    const getBal = () => {
        if (user) {
            const total = user.accounts.reduce((sum, acc) => sum + acc.balance, 0)
            if (total) {
                return total
            }
        }
    }

    useEffect(() => {
        console.log(token);
    }, [])

    useEffect(() => {
        const savedToken = localStorage.getItem('token')
        console.log(savedToken);

        if (savedToken && !token) {
            setToken(savedToken)
        }
    }, [])

    useEffect(() => {
        if (token) {
            getUser()
            getTransaction()
        }
    }, [token])

    const value = useMemo(() => ({
        token, setToken, backendUrl, navigate,
        setUser, user, getBal, currency, getUser, transactions
    }), [token, setToken, backendUrl, navigate,
        setUser, user, currency, getUser])

    return (
        <ManContext.Provider value={value} >
            {children}
        </ManContext.Provider >
    )
}

export default ManContextProvider