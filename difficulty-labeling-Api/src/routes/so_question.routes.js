module.exports = app => {
    const so_question = require("../controllers/so_question.controller.js");
    var router = require("express").Router();

    router.get("/", so_question.findAll);

    app.use('/api/questions', router);
};