exports.notFoundHandler = (_req, _res, next) => {
  const err = new Error("Resource Not Found.");
  err.status(404);
  next(err);
};

exports.applicationErrorHandler = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(501).json({ message: err.message });
};
