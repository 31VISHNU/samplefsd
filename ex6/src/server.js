const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes') 
const cors = require('cors') 

require('dotenv').config()

app.use(cors()) 
app.use(express.json()) 
app.use(routes)

mongoose.connect("mongodb://127.0.0.1:27017/ex6_fsd", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.listen(process.env.PORT, () => {
    console.log("The API is running...")
})