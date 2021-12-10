module.exports = (sequelize, Sequelize) => {
	const so_question_labelled = sequelize.define(
		"so_question_labelled",
		{
			qid: {
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			total_labels: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
		},
		{
			timestamps: false,
			tableName: "so_question_labelled",
		}
	);

	return so_question_labelled;
};
