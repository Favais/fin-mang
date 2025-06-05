import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ManContext = createContext()

const ManContextProvider = ({ children }) => {
    const [token, setToken] = useState('')
    const [currency, setCurrency] = useState('$')
    const [user, setUser] = useState()
    const [totalBal, setTotalBal] = useState()
    const [transactions, setTransactions] = useState()

    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getTransaction = async () => {
        const res = await axios.post(backendUrl + '/trx/list', {}, { headers: { token } })
        setTransactions(res.data.transactions)
    }


    const getUser = async () => {
        try {
            if (token) {
                const res = await axios.get(backendUrl + '/acc/user', { headers: { token } })
                const userData = await res.data.userData
                setUser(userData)
            }
        } catch (error) {
            console.log(error);

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

    // console.log(token);

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