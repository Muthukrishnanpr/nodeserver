const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Port = process.env.PORT || 8000
const dbUrl = "mongodb://localhost:27017/Practice"

// const cors = require('cors')
// app.use(cors())

const morgan = require('morgan')
app.use(morgan('dev'))

app.use(express.json());

const fileRouter = require('./router/pathFileRouter')
app.use("/aadhi", fileRouter)

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        //Listen
        app.listen(Port, () => {
            console.log(`Server Started on Port Number ${Port}`)
        })
        console.log("Database Connected Successfully!")
    }
})

// app.use('/', (req,res) => {
//     res.json("Hello World")
// })