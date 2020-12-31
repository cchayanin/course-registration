const express = require('express')
const router = express.Router()

const controller = require('../../controllers')

const {
	getAllRecord,
	getRecord,
	createRecord,
	updateRecord,
	deleteRecord,
} = controller.db.user

router.get('/', getAllRecord)
router.get('/', getRecord)
router.post('/', createRecord)
router.patch('/:type', updateRecord)
router.delete('/:type', deleteRecord)

module.exports = router
