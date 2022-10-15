exports.healthHandler = async (_req, res, _next) => {
  try {
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(501).json({ message: "Internal Server Error." });
  }
};
