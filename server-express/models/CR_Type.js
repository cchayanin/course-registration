module.exports = (sequelize, DataTypes) => {
	const CR_Type = sequelize.define(
		'CR_Type',
		{
			type: {
				type: DataTypes.STRING(1),
			},
			description: {
				type: DataTypes.STRING,
			},
		},
		{
			tableName: 'cr_type',
			timestamps: false,
		},
	)

	return CR_Type
}
