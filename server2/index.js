const express = require('express')
const app = express()

require('dotenv').config()
const Port = process.env.PORT || 8080
require('./database')();

const cors = require('cors')
app.use(cors())

app.use(express.json())

const morgan = require('morgan')
app.use(morgan('dev'))

// const path = require('path')
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// const fileRoutes = require('./routes/file-upload-routes')           //Mern Zip File Routes
// app.use("/api", fileRoutes.routes)

const register = require('./routes/reg.routes')
app.use('/aadhithya', register)

app.listen(Port , () => {
    console.log(`Server is listening on url http://localhost:${Port}`)
})

app.get('/', (req, res) => {
    res.send("Hello World")
})