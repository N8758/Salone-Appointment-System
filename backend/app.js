const express=require("express")
const app=express()
const cors=require("cors")
const {json} =require("body-parser")
const mongoose=require('mongoose')
const PORT=8000;


mongoose.connect("mongodb://localhost:27017/NaiApp")
.then((res)=>{
    console.log("Database connected")
}).catch((error)=>{
    console.log("Error: " , error)
})


app.use(cors())

app.use(express.json())

const route=require("./routes/salonRoute")
app.use("/salon",route)

app.get(('/'),(req,res)=>{
    res.send("Server running at port "+ PORT)
})

app.listen(PORT,()=>{console.log("Server running")})