import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import { dbconnect } from "./src/Utils/dbconnect.mjs"

dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())


app.listen(process.env.PORT,()=>{
    console.log(`listening at port ${process.env.PORT}`)
})

dbconnect()