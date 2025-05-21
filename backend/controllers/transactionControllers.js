import transactionModel from "../models/transactionModel.js"
import userModel from "../models/userModel.js"


//create transaction
const newTransaction = async (req, res) => {
    const { userId, amount, transactionType, toAccount, fromAccount } = req.body

    if (!userId || !amount || !transactionType || !toAccount || !fromAccount) {
        return res.json({ success: false, message: 'Missing required field' })
    }

    try {

        if (transactionType === 'credit') {
            const trxdetails = {
                userId,
                amount,
                transactionType,
                toAccount,
                fromAccount
            }

            const newtxn = new transactionModel(trxdetails)
            const transaction = await newtxn.save()
            const user = await userModel.findByIdAndUpdate(userId,
                { $push: { transactions: transaction._id } }, // Push the transaction to the array
                { new: true } // Return the updated user document
            )
            user.balance += amount
            res.json({ success: true, transaction })
            user.save()
        }
        if (transactionType === 'debit') {
            const trxdetails = {
                userId,
                amount,
                transactionType,
                toAccount,
                fromAccount
            }

            const newtxn = new transactionModel(trxdetails)
            const transaction = await newtxn.save()
            const user = await userModel.findByIdAndUpdate(userId,
                { $push: { transactions: transaction._id } }, // Push the transaction to the array
                { new: true } // Return the updated user document
            )
            user.balance -= amount
            res.json({ success: true, transaction })
            user.save()
        }
    } catch (error) {
        console.log(error);


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