module.exports = (sequelize, Sequelize) => {
	const so_question = sequelize.define(
		"so_question",
		{
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			question_body: {
				type: Sequelize.TEXT,
			},
			question_title: {
				type: Sequelize.STRING(500),
			},
			total_labels: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
			total_requests: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
		},
		{
			timestamps: false,
			tableName: "so_question",
		}
	);

	return so_question;
};
