import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    if (!process.env.jwt_secret) {
        throw new Error("JWT secret not defined");
    }
    return jwt.sign({ id }, process.env.jwt_secret)
}

const userLogin = async (req, res) => {
    const { email, password } = req.body

    const isUser = await userModel.findOne({ email })
    if (!isUser) {
        return res.json({ success: false, message: 'User doesnt exist' })
    }
    if (password === isUser.password) {
        const token = createToken(isUser._id)
        res.json({ success: true, isUser, token })
    } else {
        res.json({ success: false, message: 'Invalid Credentials' })
    }
}

const userRegister = async (req, res) => {
    const { firstName, lastName, email, dob, phone, password, address, gender } = req.body

    //check if user exist
    const isUser = await userModel.findOne({ email })
    if (isUser) {
        return res.json({ success: false, message: 'User already exist, Login' })
    }

    const newUser = new userModel({
        firstName,
        lastName,
        email,
        phone,
        password,
        address,
        gender
    })
    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({ success: true, token })
}

export { userLogin, userRegister }