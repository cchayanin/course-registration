module.exports = (sequelize, DataTypes) => {
	const CR_Course = sequelize.define(
		'CR_Course',
		{
			type: {
				type: DataTypes.STRING(1),
			},
			round: {
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
			},
			start_date: {
				type: DataTypes.DATEONLY,
			},
			end_date: {
				type: DataTypes.DATEONLY,
			},
		},
		{
			tableName: 'cr_course',
			timestamps: false,
		},
	)

	return CR_Course
}
