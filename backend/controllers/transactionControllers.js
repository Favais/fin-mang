import transactionModel from "../models/transactionModel.js"
import userModel from "../models/userModel.js"


//create transaction
const newTransaction = async (req, res) => {
    const { userId, amount, transactionType, toAccount, fromAccount, description } = req.body

    if (!userId || !amount || !transactionType || !toAccount || !fromAccount) {
        console.log(req.body);
        return res.json({ success: false, userId: userId, message: 'Missing required field or fields' })

    }

    try {
        const trxdetails = {
            userId,
            amount,
            transactionType,
            toAccount,
            fromAccount,
            description
        }

        const newtxn = new transactionModel(trxdetails)
        await newtxn.save()
        const user = await userModel.findById(userId)
        if (!user) {
            return res.json({ message: 'user not found' })
        }

        const accountUsed = user.accounts.find(acc => acc._id.toString() === fromAccount)

        const toNumber = Number(amount)
        if (!accountUsed) {
            return res.json({ success: false, message: 'Account not found' })
        }
        if (transactionType === 'credit') {
            accountUsed.balance += toNumber
        } else if (transactionType === 'debit') {
            if (accountUsed.balance < toNumber) {
                return res.json({ success: false, message: 'Insufficent balance' })
            }
            accountUsed.balance -= toNumber
        }
        accountUsed.transactions.push(newtxn._id)
        await user.save()

        res.json({ success: true, message: 'Transaction added', newtxn, newBalance: accountUsed.balance })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }


}

//Upadate transaction
const updateTransaction = async (req, res) => {
    const { transactionId, status } = req.body

    const transaction = await transactionModel.findByIdAndUpdate(transactionId, { status })
    res.json({ success: true, message: 'updated' })
}

//list transaction
const listTranactions = async (req, res) => {
    const { userId } = req.body

    const transactions = await transactionModel.find({ userId })
    res.json({ success: true, transactions })
}

export { newTransaction, updateTransaction, listTranactions }