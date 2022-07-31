const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 5000

app.use("/aadhithya", require("./routes/auth"))


app.use(express.json())

//Optional

// app.use(require('body-parser').json())
// app.use(require('body-parser').urlencoded({ extended: true }))

app.use(require('morgan')("dev"))

app.use(require('cors')())

app.listen(PORT, () => {
    require("./database")()
    console.log(`Server is listening on url http://localhost:${PORT}`)
})