const express = require("express");
const cors = require("cors");

const db = require("./src/models");
db.sequelize.sync();

var corsOptions = {
	origin: "http://localhost:8081",
};

const app = express();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
	res.json({ connection: true });
});

require("./src/routes/so_question.routes")(app);
require("./src/routes/so_label.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
