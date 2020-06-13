const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/page1'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

app.use(express.json())

con.on('open', function(){
    console.log("Connection Successful")
})

const detailsRouter = require('./router/details')
app.use('/details', detailsRouter)

app.listen(9000,()=>{
    console.log("listing at port 9000")
})