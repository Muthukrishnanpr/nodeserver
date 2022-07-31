const express = require('express')
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 5000

app.use(require('morgan')("dev"))

app.use(require('cors')())

app.use(express.json())

app.use('/aadhithya', require('./routes/reg.routes'))

app.listen(PORT, () => {
    require("../database")()
    console.log(`Server is listening on url http://localhost:${PORT}`)
})

// const path = require('path')
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// const fileRoutes = require('./routes/file-upload-routes')           //Mern Zip File Routes
// app.use("/api", fileRoutes.routes)
