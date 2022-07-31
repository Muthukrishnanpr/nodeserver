'use strict'
const User = require('../models/reg.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
            // const user_token = { _id : req.body._id }
            // const token = jwt.sign({ user_token }, 'my_secret_key')
            // res.json({
            //     token : token
            // })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "Successfully registered", user : user})
                }
            })
        }
    })

}

// const User_Registration = async (req, res, next) => {
//     try {
//         const { fir1stname, lastname, email, password } = req.body
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
    const {email} = req.body
    // const {password} = req.body
    const {password} = bcrypt.compare(req.body.password)
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password, user.password) {
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



// const User_Login = async (req, res, next) => {
//     const { email } = req.body
//     const { password } = bcrypt.compare(req.body.password)
//     User.findOne({ email }, (err, user) => {
//         if (user) {
//             if (password, user.password) {
//                 res.send({ message: "Login Successfully!" })
//             }
//             else {
//                 res.send({ message: "Password did't match" })
//             }
//         }
//         else {
//             res.send({ message: "User not registered" })
//         }
//     })
// }


// const User_Login = async (req, res, next) => {
//     const { email, password } = req.body;

//     // Simple validation
//     if (!email || !password) {
//         return res.status(400).json({ msg: 'Please enter all fields' });
//     }

//     try {
//         // Check for existing user
//         const user = await User.findOne({ email });
//         if (!user) throw Error('User does not exist');

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) throw Error('Invalid credentials');

//         const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });
//         if (!token) throw Error('Couldnt sign the token');

//         res.status(200).json({
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email
//             }
//         });
//     } catch (e) {
//         res.status(400).json({ msg: e.message });
//     }
// }



module.exports = { User_Registration, User_Login };