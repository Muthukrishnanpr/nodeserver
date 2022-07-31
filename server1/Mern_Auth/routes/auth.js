const express = require('express')
const router = express.Router()


const User_Registration = require("../Controllers/auth")
// const validate = require('../middlewares/validate')


router.post('/', User_Registration)

router.get('/', (req, res) => {
    res.send("AMMA")
})

module.exports = router;