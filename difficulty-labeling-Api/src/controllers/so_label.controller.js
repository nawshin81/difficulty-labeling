const db = require("../models");
const so_label = db.so_label;
const so_question = db.so_question;
const sequelize = db.sequelize;

exports.create = async (req, res) => {
	// Validate request
	if (!req.body.labeller && !req.body.qid && !req.body.label && !req.body.label_rule) {
		res.status(400).send({
			message: "Missing Fields",
		});
		return;
	}

	// Insert label
	const question_label = {
		labeller: req.body.labeller,
		qid: req.body.qid,
		label: req.body.label,
		label_rule: req.body.label_rule,
		remarks: req.body.remarks ? req.body.remarks : null,
	};

	// Save so_label in the database
	return (result = await sequelize.transaction(async (t) => {
		await so_label
			.create(question_label)
			.then(async (data) => {
				console.log(data.dataValues.qid);
				// res.status(200).send();
				await so_question
					.increment("total_labels", { by: 1, where: { id: data.dataValues.qid }, transaction: t, lock: t.LOCK.UPDATE, raw: true })
					.then(() => {
						res.status(200).send(data.dataValues);
					})
					.catch((err) => {
						res.status(500).send({
							message: err.message,
						});
					});
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred while creating the so_label.",
				});
			});
	}));
};
