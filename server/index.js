const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require("cors");
const dotenv=require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Successful")
}).catch((err)=>{console.log(err)});

// app.get("/api/test",()=>{
//     console.log("Test");
// })


app.use(express.json());
app.use(cors());


app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Running");
})