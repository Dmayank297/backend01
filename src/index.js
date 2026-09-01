import dotenv from "dotenv"
import connectDB from "../db/connectDB.js"

dotenv.config({
    path: '.env',
})

connectDB()











// //IIFE function to initialise the connection on start
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
//         app.on("Error ", (error) => {
//             console.log("Error: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error:", error)
//         throw err
//     }
// })()