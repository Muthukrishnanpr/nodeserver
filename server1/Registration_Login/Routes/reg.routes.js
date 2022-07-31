'use strict'

const express = require('express')
const router = express.Router()
const { User_Registration, User_Login } = require('../controllers/reg.controller')

router.post('/register', User_Registration)
router.post('/login', User_Login)

module.exports = router;