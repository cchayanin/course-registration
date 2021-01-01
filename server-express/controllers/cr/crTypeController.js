const db = require('../../models')

const getAllRecord = async (req, res) => {
	const records = await db.CR_Type.findAll()
	res.status(200).send(records)
}

const createRecord = async (req, res) => {
	//* check record exists
	const existRecord = await db.CR_Type.findOne({
		where: { type: req.body.type },
	})

	if (existRecord) {
		res.status(400).send({ message: 'Record already exists.' })
	} else {
		await db.CR_Type.create({
			...req.body,
		})
		res.status(201).send({ message: 'Record created.' })
	}
}

const updateRecord = async (req, res) => {
	//* find record to update.
	const targetRecord = await db.CR_Type.findOne({
		where: { id: req.params.id },
	})

	if (targetRecord) {
		await targetRecord.update({ ...req.body })
		res.status(200).send({ message: 'Record updated.' })
	} else {
		res.status(400).send({ message: 'Record not found.' })
	}
}

const deleteRecord = async (req, res) => {
	//* find record to delete.
	const targetRecord = await db.CR_Type.findOne({
		where: { id: req.params.id },
	})

	if (targetRecord) {
		await targetRecord.destroy()
		res.status(204).send()
	} else {
		res.status(404).send({ message: 'Record not found.' })
	}
}

module.exports = {
	getAllRecord,
	createRecord,
	updateRecord,
	deleteRecord,
}
