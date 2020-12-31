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
router.patch('/:id', updateRecord)
router.delete('/:id', deleteRecord)

module.exports = router
