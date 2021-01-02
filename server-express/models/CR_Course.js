module.exports = (sequelize, DataTypes) => {
	const CR_Course = sequelize.define(
		'CR_Course',
		{
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

	CR_Course.associate = (models) => {
		CR_Course.belongsTo(models.CR_Type, {
			foreignKey: 'type_id',
			onDelete: 'RESTRICT',
			onUpdate: 'RESTRICT',
		})
	}
	return CR_Course
}
