const mongoose = require('mongoose')

const Cards = mongoose.Schema({
    name: String,
    profile: {
        fileName: String,
        filePath: String,
        fileSize: String,
        fileType: String
    },
    role: String,
    description: String,
    contact: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("cards", Cards)