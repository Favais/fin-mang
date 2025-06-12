import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'
import NewTransaction from '../components/NewTransaction'
import { ManContext } from '../context/ManContext'
import axios from 'axios'

const Transactions = () => {
    const { user, backendUrl, token } = useContext(ManContext)
    const [showAddTransaction, setShowAddTransaction] = useState(false)
    const [transactions, setTransactions] = useState()
    const [filteredTransactions, setFilteredTransactions] = useState()
    const [filter, setFilter] = useState('all')

    const gettransaction = async () => {
        const res = await axios.post(backendUrl + '/trx/list', {}, { headers: { token } })
        setTransactions(res.data.transactions)
    }

    useEffect(() => {
        if (user) {
            gettransaction()
        }
    }, [user])

    useEffect(() => {
        let filtered = []
        if (filter === 'all') {
            filtered = transactions
        } else {
            filtered = transactions?.filter(tx => tx.transactionType === filter)
        }
        setFilteredTransactions(filtered)
    }, [user, transactions, filter])

    const onclickFilter = (type) => {
        setFilter(type)
    }

    return (
        <div className='flex-1 bg-neutral-100 min-h-screen'>
            <Header />
            <NewTransaction show={showAddTransaction} setShow={setShowAddTransaction} onSuccess={gettransaction} />
            <div className='my-4 mx-2 md:mx-5'>
                <div className='flex gap-4'>
                    <p className='text-xl text-neutral-400'>Recent Transaction</p>
                </div>
                <div className='flex flex-col md:flex-row my-4 gap-4 md:gap-6 justify-between items-start md:items-center'>
                    <div className='flex gap-4 md:gap-6'>
                        <NavLink onClick={() => onclickFilter('all')} className={` ${filter === 'all' ? 'text-teal-600  border-b border-teal-600' : ' font-semibold'}`}>
                            All
                        </NavLink>
                        <NavLink onClick={() => onclickFilter('credit')} className={` ${filter === 'credit' ? 'text-teal-600  border-b border-teal-600' : ' font-semibold'}`}>
                            Revenue
                        </NavLink>
                        <NavLink onClick={() => onclickFilter('debit')} className={` ${filter === 'debit' ? 'text-teal-600  border-b border-teal-600' : ' font-semibold'}`}>
                            Expenses
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={() => setShowAddTransaction(true)} className='py-3 px-4 md:py-4 md:px-6 bg-teal-600 rounded-lg text-white cursor-pointer w-full md:w-auto'>
                            Add Transaction
                        </button>
                    </div>
                </div>
                <div className='bg-white rounded-lg px-2 md:px-6 py-4 overflow-x-auto'>
                    {/* Table header */}
                    <div className='hidden md:grid grid-cols-[2fr_1.5fr_1fr_1.5fr_1fr_1fr_1fr] text-sm font-semibold'>
                        <p>Items</p>
                        <p>Transaction participant</p>
                        <p>Date</p>
                        <p>Payment Method</p>
                        <p>Amount</p>
                        <p>Transaction Type</p>
                        <p>Transaction Status</p>
                    </div>
                    {/* Mobile/tablet cards */}
                    <div className='md:hidden flex flex-col gap-2'>
                        {filteredTransactions?.map((item, i) => {
                            const fromAccount = user.accounts.find(acc => acc._id === item.fromAccount)
                            return (
                                <div key={i} className='border border-neutral-200 rounded-lg p-3 bg-neutral-50'>
                                    <div className='flex justify-between text-xs font-semibold'>
                                        <span>{item.description}</span>
                                        <span className='text-teal-600 text-xl'>${item.amount}</span>
                                    </div>
                                    <div className='mt-2 text-xs'>
                                        <div><span className='font-semibold'>Participant:</span> {item.toAccount.bankName} ({item.toAccount.accountNumber})</div>
                                        <div><span className='font-semibold'>Date:</span> {new Date(item.date).toLocaleDateString()}</div>
                                        <div><span className='font-semibold'>Payment:</span> {fromAccount ? `${fromAccount.bank}- ${fromAccount.accountNumber}` : 'Unknown source'}</div>
                                        <div><span className='font-semibold'>Type:</span> {item.transactionType}</div>
                                        <div><span className='font-semibold'>Status:</span> {item.status}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* Desktop/tablet table rows */}
                    <div className='hidden md:block'>
                        {
                            filteredTransactions?.map((item, i) => {
                                const fromAccount = user.accounts.find(acc => acc._id === item.fromAccount)
                                return (
                                    <div key={i} className='grid grid-cols-[2fr_1.5fr_1fr_1.5fr_1fr_1fr_1fr]'>
                                        <p className='py-5 px-2 border-b border-neutral-100 text-xs font-semibold'>{item.description}</p>
                                        <p className='py-5 px-2 border-b border-neutral-100 text-xs'>{item.toAccount.bankName}({item.toAccount.accountNumber})</p>
                                        <p className='py-5 px-2 border-b border-neutral-100 text-xs'>{new Date(item.date).toLocaleDateString()}</p>
                                        <p className='py-5 px-2 border-b border-neutral-100 text-xs'>{fromAccount ? `${fromAccount.bank}- ${fromAccount.accountNumber}` : 'Unknown source'}</p>
                                        <p className='py-5 px-2 border-b border-neutral-100 text-xs'>${item.amount}</p>
                                        <p className='py-5 px-2 border-b border-neutral-100 text-xs'>{item.transactionType}</p>
                                        <p className='py-5 px-2 border-b border-neutral-100 text-xs'>{item.status}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center'>
                        <button className='mt-5 py-2 px-10 text-white text-xs font-semibold bg-teal-600 rounded'>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions