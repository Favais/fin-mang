import mongoose, { Mongoose } from "mongoose";

const Schema = mongoose.Schema

const transactionSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Refers to the user that made the transaction
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionType: {
        type: String,
        enum: ['debit', 'credit'],
        required: true
    },
    toAccount: {
        accountNumber: {
            type: Number,
            required: true
        },
        bankName: {
            type: String,
            required: true
        },
    },
    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const transactionModel = mongoose.models.transaction || mongoose.model('transaction', transactionSchema)

export default transactionModel