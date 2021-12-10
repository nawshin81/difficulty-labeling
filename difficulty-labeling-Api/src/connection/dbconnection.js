config = {
	HOST: "localhost",
	PORT: "1433",
	USER: "outcast",
	PASSWORD: "",
	DB: "Difficulty_labeling",
	dialect: "mssql",
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
module.exports = config;
