import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log("Database connected successfully")
        })

        connection.on('error' , (err)=>{
            console.log("Error occure while connecting to DATABASE")
            console.log(err)
            process.exit()
        })

    } catch (error) {
        console.log('Some error occured', error)
    }
}