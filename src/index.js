import dotenv from "dotenv"
import connectDB from "../db/connectDB.js"

dotenv.config({
    path: '.env',
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("App listening error: ", error);
        throw error
    })
    app.listen(process.env.PORT || 9000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGOdb Connection Failed (index.js)! ", err);
})