import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';

const app = express()
//cors is middleware so we "use"
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// limit of json data at one request from form
app.use(express.json({limit: "16kb"})) 
//url encoder for any type of url changes
app.use(express.urlencoded({extended: true, limit: "16kb"}))
//koi bhi statis pdf file wagera store krne ke liye
app.use(express.static("public"))
//cookie ko store krna and retrieve krna(crud)
app.use(express.cookieParser())



export default app;