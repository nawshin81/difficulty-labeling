const dbConfig = require("../connection/dbconnection.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	port: dbConfig.PORT,
	dialect: dbConfig.dialect,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.so_question = require("./so_question.model.js")(sequelize, Sequelize);
db.so_question_labelled = require("./so_question_labelled.model.js")(sequelize, Sequelize);
db.so_label = require("./so_label.model.js")(sequelize, Sequelize);

module.exports = db;
