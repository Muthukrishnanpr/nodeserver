const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Role: {
        type: String,
        required: true
    },
    Status: {
        Active: {
            type: String,
        },
        InActive: {
            type: String,
        }
    },
    ImageFile: {
        type: String
    }
    
})

module.exports = mongoose.model("collection", userSchema)