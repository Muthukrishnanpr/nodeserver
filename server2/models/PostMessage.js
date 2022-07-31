const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    Creator :String,
    tags : [String],
    selectedFile : String,
    likeCounter : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Number,
        default : new Date()
    }
})

module.exports = mongoose.model("PostMessage", postSchema)