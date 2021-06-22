const express = require('express')
const mongoose = require('mongoose')
const url = require("./configs/dbConfigs")
const userRoutes = require("./routes/user-routes")
const appointmentRoutes= require("./routes/appointment-routes")
const app = express();

mongoose.connect(url , {useNewUrlParser: true})

const con = mongoose.connection

con.on('open', function (){
    console.log('connected to db');
})

app.use(express.json())



app.use('/user', userRoutes)
app.use('/appointment', appointmentRoutes)

app.listen(process.env.PORT || 3000 , function (){
    console.log('Listening on 3000');
})
