'use strict'
const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const my_secret_key = "my_secret_key"

const User_Registration = async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({
                msg: "User Already exists"
            })

            const newUser = new User({
                firstname, lastname, email, password
            })

            //Create Salt & Hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash
                    newUser.save()

                    //taken on jsonwebtaken
                    jwt.sign({ id: newUser.id }, my_secret_key, { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err;
                        res.json({
                            msg: "You are Registered Successfully",
                            Taken_on_your_Token: token,
                            user: { Your_Email_id: newUser.email }
                        })
                    })
                })
            })
        })

}

const User_Login = async (req, res, next) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) return res.status(400).json({ msg: 'Please enter all fields' });

    try {
        // Check for existing user
        const user = await User.findOne({ email });
        if (!user) throw Error('User does not exist');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid credentials');

        const token = jwt.sign({ id: user._id }, my_secret_key, { expiresIn: 3600 });
        if (!token) throw Error('Couldnt sign the token');

        res.status(200).json({
            msg: "You are Logged in Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
};


module.exports = { User_Registration, User_Login };