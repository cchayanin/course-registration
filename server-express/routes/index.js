const express = require('express')
const router = express.Router()

const dbRouter = require('./db')
const crRouter = require('./cr')

router.use('/db', dbRouter)
router.use('/cr', crRouter)

module.exports = router
