import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import { dbconnect } from "./src/Utils/dbconnect.mjs"
import doctorsRouter from "./src/Routes/doctorsRoutes.mjs"
import bookingRouter from "./src/Routes/bookingRoutes.mjs"
dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(doctorsRouter)
app.use(bookingRouter)

app.listen(process.env.PORT,()=>{
    console.log(`listening at port ${process.env.PORT}`)
})

dbconnect()