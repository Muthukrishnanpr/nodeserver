const mongoose = require('mongoose')

// const DB_URL = process.env.DATABASE_URL_LOCALHOST || process.env.DATABASE_URL_CULTURE
module.exports = () => {
    if (process.env.DATABASE_URL_LOCALHOST) {
        try {
            mongoose.connect(process.env.DATABASE_URL_LOCALHOST, { useNewUrlParser: true, useUnifiedTopology: true },
                err => {
                    if (!err) {
                        console.log(`Database Connected Successfully! on ${process.env.DATABASE_URL_LOCALHOST}`)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
    else if (process.env.DATABASE_URL_CULTURE) {
        mongoose.connect(process.env.DATABASE_URL_CULTURE, { useNewUrlParser: true, useUnifiedTopology: true },
            err => {
                if (!err) {
                    console.log(`Database Connected Successfully! on ${process.env.DATABASE_URL_CULTURE}`)
                }
            })
    }
}
