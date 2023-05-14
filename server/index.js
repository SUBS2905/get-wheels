const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require('dotenv');

const userRouter = require('./routes/authRoutes')
const sessionRouter = require('./routes/sessionRoutes')
const vehicleRouter = require('./routes/vehicleRoutes')
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

dotenv.config();

//localhost url
mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
}).catch((err)=>{console.log(err)});


require('./models/otpAuth')
require('./models/user')
require('./models/vehicle')
require('./models/vehicleDeal')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/session', sessionRouter);
app.use('/vehicle', vehicleRouter);

app.get("/", (req, res)=>{
    res.send("Get Wheels services API.")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Running🚀: http://localhost:5000/");
})