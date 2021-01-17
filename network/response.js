const chalk = require("chalk");

exports.success = (res, message, status) => {
  res.status(status || 200).send({
    error: null,
    body: message,
  });
};

exports.error = (req, res, message, status, details) => {
  console.error(
    chalk.red("[Response error](" + req.originalUrl + "): " + details)
  );
  res.status(status || 500).send({
    error: message,
    body: null,
  });
};
