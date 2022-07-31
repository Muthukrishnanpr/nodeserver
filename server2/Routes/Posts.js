const express = require('express')
const router = express.Router()

const { getPosts, createPost } = require('../Controller/Posts.js')

router.get('/', getPosts)
router.post('/', createPost)

module.exports = router;