const db = require("../models");
const so_question = db.so_question;
// const so_question_labelled = db.so_question_labelled;
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;
const Op = Sequelize.Op;

exports.findAll = (req, res) => {
	// const title = req.query.title;
	// var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
	//   { where: condition }
	so_question
		.findAll({ raw: true })
		.then((data) => {
			console.log(data);
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving tutorials.",
			});
		});
};

exports.findAnyNumber = async (req, res) => {
	const number = Number(req.params.number);
	return (result = await sequelize.transaction(async (t) => {
		await so_question
			.findAll({
				where: {
					total_labels: { [Op.lt]: 3 },
					total_requests: { [Op.lt]: 3 },
				},
				raw: true,
				transaction: t,
				skipLocked: true,
				lock: t.LOCK.UPDATE,
				limit: number,
			})
			.then(async (data) => {
				allIDs = data.map((item) => item.id);
				allQuestionData = data.map((item) => {
					return {
						id: item.id,
						question_title: item.question_title,
						question_body: item.question_body,
					};
				});
				// console.log(allQuestionData);
				await so_question
					.increment("total_requests", { by: 1, where: { id: allIDs }, transaction: t, raw: true })
					.then(() => {
						res.status(200).send(allQuestionData);
					})
					.catch((err) => {
						res.status(500).send({
							message: err.message,
						});
					});
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message,
				});
			});
	}));
};
