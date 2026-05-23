const errorHandler = (er, req, res, next) => {
  const statusCode = errorHandler.statusCode || 500;
  const message = errorHandler.message || "Internal Server Error";

  res.status(statusCode).json({
    sucess: false,
    error: message,
  });
};

module.exports = errorHandler;
