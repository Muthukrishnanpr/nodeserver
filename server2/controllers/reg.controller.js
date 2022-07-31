'use strict'
const User = require('../models/reg.models')

const User_Registration = async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
        }
        else {
            const user = new User({
                firstname,
                lastname,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "Successfully registered" })
                }
            })
        }
    })

}

// const User_Registration = async (req, res, next) => {
//     try {
//         const { firstname, lastname, email, password } = req.body
//         User.findOne( { email : email }, (err, user) => {
//             if(user){
//                 res.send({ message : "User already registered" })
//             }
//             else{
//                 const user = new User({
//                     firstname,
//                     lastname,
//                     email,
//                     password
//                 })
//                 await user.save()
//                 res.send({ message : "Successfully registered" })
//             }
//         } )
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }


const User_Login = async (req, res, next) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfully!", user: user })
            }
            else{
                res.send({ message : "Password did't match" })
            }
        }
        else {
            res.send({ message: "User not registered" })
        }
    })
}

module.exports = { User_Registration, User_Login };