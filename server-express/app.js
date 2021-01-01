const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

const db = require('./models')

const router = require('./routes')

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

db.sequelize.sync({ force: false }).then(() => {
	app.listen(8000)
})
