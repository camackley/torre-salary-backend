/*Packages*/
const chalk = require("chalk");
const express = require("express");
const bodyParser = require("body-parser");

/*Other complements*/
const router = require("./network/routes.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/state", express.static("public/service_run.html"));

app.listen(3000);
console.log(chalk.blue("The server is listening on http://localhost:3000"));
