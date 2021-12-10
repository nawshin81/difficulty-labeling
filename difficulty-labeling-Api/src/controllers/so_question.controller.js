const db = require("../models");
const so_question = db.so_question;
// const Op = db.Sequelize.op;

exports.findAll = (req, res) => {
	// const title = req.query.title;
	// var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
	//   { where: condition }
	so_question
		.findAll()
		.then((data) => {
            console.log(data)
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving tutorials.",
			});
		});
};
