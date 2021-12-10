const db = require("../models");
const so_label = db.so_label;

exports.create = (req, res) => {
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
	so_label
		.create(question_label)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the so_label.",
			});
		});
};
