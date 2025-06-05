import express from 'express'
import { addAccount, getUser, userLogin, userRegister } from '../controllers/userControllers.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.post('/bal', authUser, addAccount)
userRouter.get('/user', authUser, getUser)

export default userRouter