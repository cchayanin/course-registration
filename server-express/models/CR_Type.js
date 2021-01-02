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

	CR_Type.associate = (models) => {
		CR_Type.hasMany(models.CR_Course, {
			foreignKey: 'type_id',
		})
	}

	return CR_Type
}
