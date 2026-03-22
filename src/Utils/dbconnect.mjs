import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log(`connected at ${mongoose.connection.name}`)
    } catch (e) {
        console.log(e.message)
    }
}