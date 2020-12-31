const express = require('express')
const router = express.Router()

const dbUserRouter = require('./dbUserRouter')
const dbPermissionRouter = require('./dbPermissionRouter')

router.use('/users', dbUserRouter)
router.use('/permissions', dbPermissionRouter)

module.exports = router
