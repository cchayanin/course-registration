const db = require('../../models')

const getAllRecord = async (req, res) => {
	const records = await db.CR_Course.findAll({ include: [db.CR_Type] })
	res.status(200).send(records)
}
const createRecord = async (req, res) => {
	const existRecord = await db.CR_Course.findOne({
		where: { type_id: req.body.type_id, round: req.body.round },
	})

	if (existRecord) {
		res.status(400).send({ message: 'Record already exists.' })
	} else {
		await db.CR_Course.create({
			...req.body,
		})
		res.status(201).send({ message: 'Record created.' })
	}
}
const updateRecord = async (req, res) => {
	const targetRecord = await db.CR_Course.findOne({
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
	const targetRecord = await db.CR_Course.findOne({
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
