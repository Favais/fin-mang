import express from 'express'
import { listTranactions, newTransaction, updateTransaction } from '../controllers/transactionControllers.js'

const transactionRouter = express.Router()

transactionRouter.post('/credit', newTransaction)
transactionRouter.post('/debit', newTransaction)
transactionRouter.post('/list', listTranactions)
transactionRouter.post('/update', updateTransaction)

export default transactionRouter