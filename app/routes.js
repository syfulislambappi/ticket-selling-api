const router = require("express").Router();

router.get("/health", (_req, res) => {
  const error = new Error("Internal Server Error");
  error.status = 500;
  throw error;
  res.status(200).json({ message: "Success" });
});

module.exports = router;
