/**
 * @name unknownEndpoint
 * @function
 * @description Middleware that handles requests to unknown or un-registered API endpoints.
 * @constant
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const unknownEndpoint = (req, res, next) => {
  /* eslint-disable quotes */
  res.status(404).json({
    status: 404,
    error: "There's nothing here 🤷",
  });

  // Call the next middleware
  next();
};

// Exporting middleware
module.exports = unknownEndpoint;
