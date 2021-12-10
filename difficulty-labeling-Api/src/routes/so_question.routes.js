module.exports = (app) => {
	const so_question = require("../controllers/so_question.controller.js");
	var router = require("express").Router();

	router.get("/", so_question.findAll);

	router.get("/:number", so_question.findAnyNumber);

	app.use("/api/questions", router);
};
