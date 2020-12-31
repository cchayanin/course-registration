const express = require('express')
const router = express.Router()

const crTypeRouter = require('./crTypeRouter')
const crCourseRouter = require('./crCourseRouter')
const crPersonRouter = require('./crPersonRouter')

router.use('/types', crTypeRouter)
router.use('/courses', crCourseRouter)
router.use('/persons', crPersonRouter)

module.exports = router
