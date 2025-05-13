import express from "express"
import { configDotenv } from "dotenv";
configDotenv()
const app = express();


app.use("/",(req,res)=>{
    res.json("hello")
})
console.log(process.env.MONGO_URI)
const port = process.env.port

app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port} `)
})