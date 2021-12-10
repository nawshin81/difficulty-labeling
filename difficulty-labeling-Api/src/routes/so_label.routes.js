module.exports = (app) => {
	const so_label = require("../controllers/so_label.controller.js");
	var router = require("express").Router();

	router.post("/", so_label.create);

	app.use("/api/label", router);
};
