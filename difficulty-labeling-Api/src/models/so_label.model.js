module.exports = (sequelize, Sequelize) => {
	const so_label = sequelize.define(
		"so_label",
		{
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			labeller: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			qid: {
				type: Sequelize.INTEGER,
				allowNull: false,
				reference: {
					model: "so_question",
					key: "id",
				},
			},
			label: { type: Sequelize.STRING, allowNull: false },
			label_rule: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			remarks: {
				type: Sequelize.STRING(1000),
			},
		},
		{
			timestamps: true,
			tableName: "so_label",
		}
	);

	return so_label;
};
