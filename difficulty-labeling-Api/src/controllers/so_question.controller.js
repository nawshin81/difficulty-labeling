const db = require("../models");
const so_question = db.so_question;
const so_question_labelled = db.so_question_labelled;
const Sequelize = db.Sequelize;
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

exports.findAnyNumber = (req, res) => {
	const number = req.params.number;
	so_question.hasOne(so_question_labelled, { foreignKey: "qid" });
	so_question_labelled.belongsTo(so_question, { foreignKey: "qid" });
	var allQuestion = [];
	so_question
		.findAll({
			include: [
				{
					model: so_question_labelled,
					where: {
						total_labels: { [Op.lt]: 3 },
					},
					required: true,
					raw: true,
				},
			],
		})
		.then((data) => {
			
			console.log(data[0].dataValues.so_question_labelled.dataValues);
			res.status(200).send();
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving tutorials.",
			});
		});
};
// exports.findOne = (req, res) => {
// 	const id = req.params.id;

// 	Tutorial.findByPk(id)
// 		.then((data) => {
// 			res.send(data);
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message: "Error retrieving Tutorial with id=" + id,
// 			});
// 		});
// };
