import React from 'react'
import Header from '../components/Header'
import Graph from '../components/Graph'
import ExpensesBreakdown from '../components/ExpensesBreakdown'

const Expenses = () => {
    return (
        <div className="w-full bg-neutral-100 min-h-screen">
            <Header />
            <p className="py-4 px-4 md:px-6 text-lg text-neutral-500">Expenses Comparison</p>
            <div className="py-4 px-2 md:px-4 bg-white mx-2 md:mx-6 rounded-xl">
                <Graph />
            </div>
            <div className="my-6 mx-2 md:mx-6">
                <p className="text-lg text-neutral-500">Expense Breakdown</p>
                <ExpensesBreakdown />
            </div>
        </div>
    )
}

export default Expenses