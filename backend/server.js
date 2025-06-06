import express from 'express'
import cors from 'cors'
import connectdb from './config/mogodb.js'
import 'dotenv/config'
import userRouter from './routers/userRoutes.js'
import transactionRouter from './routers/transactionRoutes.js'


// Config
const app = express()
connectdb()

//middleware
app.use(express.json())
app.use(cors())

//api
app.use('/acc', userRouter)
app.use('/trx', transactionRouter)


app.use('/', (req, res) => {
    res.send('api working')
})


app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));