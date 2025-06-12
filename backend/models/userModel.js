import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        require: true,
        validate: {
            validator: () => {
                // Calculate the user's age
                const age = new Date().getFullYear() - value.getFullYear();
                const month = new Date().getMonth() - value.getMonth();
                const day = new Date().getDate() - value.getDate();

                // If the user's birthday hasn't happened yet this year, subtract 1 from the age
                if (month < 0 || (month === 0 && day < 0)) {
                    return age >= 18; // Age must be 18 or older
                }
                return age >= 18; // Age must be 18 or older
            },
            message: 'User must be at least 18 years old.',
        },
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'active'
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    accounts:
        [
            {
                cardId: {
                    type: Number
                },
                bank: {
                    type: String
                },
                accType: {
                    type: String,
                    default: 'Savings',
                    enum: ['Savings', 'Checking', 'Loan', 'Credit Card', "investment"]
                },
                accountNumber: {
                    type: Number,
                    sparse: true,
                    default: () => Math.floor(1000000000 + Math.random() * 9000000000).toString(), // Random 10-digit account number
                },
                balance: {
                    type: Number,
                    default: 0
                },
                currency: {
                    type: String,
                    default: 'USD'
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                },
                transactions: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'transaction'
                }]
            }
        ]
})


const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel