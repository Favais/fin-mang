import express from 'express'
import { listTranactions, newTransaction, updateTransaction } from '../controllers/transactionControllers.js'
import authUser from '../middlewares/auth.js'
const transactionRouter = express.Router()

transactionRouter.post('/credit', authUser, newTransaction)
transactionRouter.post('/debit', newTransaction)
transactionRouter.post('/list', authUser, listTranactions)
transactionRouter.post('/update', updateTransaction)

export default transactionRouter