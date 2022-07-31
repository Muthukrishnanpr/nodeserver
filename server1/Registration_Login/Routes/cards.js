const express = require('express')
const { PostCards, GetCards, DeleteCards } = require('../controllers/cards')
const Pic = require('../helpers/cardsPic')
const auth = require('../helpers/auth')

const router = express.Router()

router.get('/', GetCards) 

router.post('/', Pic.single("profile"), auth, PostCards)

router.delete('/:id', auth, DeleteCards)


module.exports = router;