/* Packages */
const express = require("express");

/* Other complements */
const controller = require("./controller.js");
const response = require("../../network/response.js");

const router = express.Router();

router.post("/salary/:username", (req, res) => {
  controller
    .calculateSalary(req.params.username, req.body)
    .then((data) => response.success(res, data, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 500, error));
});

router.get("/salary/skills/:username", (req, res) => {
  controller
    .getSKills(req.params.username)
    .then((data) => response.success(res, data, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 500, error));
});

module.exports = router;
