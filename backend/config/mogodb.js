import mongoose from "mongoose";


const connectdb = async () => {

    const db = mongoose.connection

    db.on('connected', () => {
        console.log('Connected on mongodb');

    })
    db.on('error', (error) => {
        console.log('mongoose connection error:', error);

    })

    db.on('disconnected', () => {
        console.log('Mongoose disconected');

    })
    await mongoose.connect(`${process.env.mongodb_url}/bankingdb`)

}

export default connectdb