'use strict'
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const { check, validationResult } = require("express-validator")
const User = require("../models/Users")

var jwtSecret = "mysecrettoken";

const User_Registration = async (req, res, next) => {
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //     res.status(400).json({ errors: errors.array() })
    // }

    const { name, email, password } = req.body;
    try {
        //See if User Exits
        let user = await User.findOne({ email : email });
        if (user) {
            res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }
        user = new User({
            name, email, password
        })
        //Encrypt Password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            },
        };
        jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
            if (err) { throw err }
            res.json({ token })
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}


module.exports = User_Registration;