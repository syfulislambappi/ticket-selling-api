const { healthHandler } = require("./controller");

const router = require("express").Router();

router.all("/health", healthHandler);

module.exports = router;
