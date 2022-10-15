const router = require("express").Router();
const { healthHandler } = require("./controller");

router.use("/api/v1/tickets", require("../routes/ticket.route"));

router.all("/health", healthHandler);

module.exports = router;
