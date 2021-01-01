const express = require('express')
const router = express.Router()

const controller = require('../../controllers')

const {
	getAllRecord,
	createRecord,
	updateRecord,
	deleteRecord,
} = controller.cr.course

router.get('/', getAllRecord)
router.post('/', createRecord)
router.patch('/:type', updateRecord)
router.delete('/:type', deleteRecord)

module.exports = router
