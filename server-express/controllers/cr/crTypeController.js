const db = require('../../models')

const getAllRecord = async (req, res) => {
	const records = await db.CR_Type.findAll()
	res.status(200).send(records)
}
const createRecord = (req, res) => {}
const updateRecord = (req, res) => {}
const deleteRecord = (req, res) => {}

module.exports = {
	getAllRecord,
	createRecord,
	updateRecord,
	deleteRecord,
}
