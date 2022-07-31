const mongoose = require('mongoose')

const User = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
})



// const jwt = require('jsonwebtoken')
// User.methods.generateAuthToken = async function(){
//     try {
//         const token = jwt.sign({_id : this._id.toString()}, "my_secret_key")
//         console.log(token)
//     } catch (error) {
//         console.log(error)
//     }
// }


const bcrypt = require('bcryptjs')
User.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, salt)
        this.password = hashPassword
        next()
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("User", User)