const db = require("../models");
const so_question_labelled = db.so_question_labelled;
// const Op = db.Sequelize.op;

exports.increment = (req, res) => {
	so_question_labelled.increment("total_labels", { by: 1, where: { qid: req.body.qid } });
};

// exports.update = (req, res) => {
// 	// const title = req.query.title;
// 	// var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
// 	//   { where: condition }
// 	so_question
// 		.findAll()
// 		.then((data) => {
//             console.log(data)
// 			res.send(data);
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message: err.message || "Some error occurred while retrieving tutorials.",
// 			});
// 		});
// };
