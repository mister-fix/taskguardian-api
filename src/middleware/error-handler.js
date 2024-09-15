// Import custom console logger
const logger = require('@utils/logger');

/**
 * @name errorHandler
 * @description Custom middleware acting as a centralized API error handler.
 * @function
 * @constant
 * @param {object} err - The error object caught by Express.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @param {Function} next - The next middleware function.
 * @returns {object|void} - JSON response with error status and message.
 */
const errorHandler = (err, req, res, next) => {
  // Log the error to the console
  logger.error({ message: err.message, stack: err.stack });

  // Determine the response based on the error type or message
  switch (err.message) {
    // Handle CORS related errors
    case 'Not Allowed by CORS':
      return res.status(403).send({
        error: 'Forbidden',
        message: `Origin '${req.headers.origin}' Not Allowed by CORS.`,
      });

    case 'CastError':
      // Handle Mongoose cast errors (e.e., invalid ObjectID)
      return res.status(400).json({
        error: 'Bad request',
        message: 'ID in the request body could not be read properly.',
      });

    case 'ValidationError':
      // Handle Mongoose ValidationErrors (e.g., schema validation failed)
      return res.status(400).json({
        error: 'Bad request',
        message: err.message,
      });

    case 'MongoServerError':
      // Handle MongoDB server errors, specifically duplicate key errors
      if (err.message.includes('E11000 duplicate key error')) {
        return res.status(400).json({
          error: 'Bad request',
          message: 'Expected "email" to be unique.',
        });
      }
      break;

    default:
      // Handle all other unexpected errors
      return res.status(500).json({
        status: 500,
        error: 'Internal server error.',
        message: err.message,
      });
  }

  // Call the next middleware function if not handled above
  next();
};

// Exporting middleware
module.exports = errorHandler;
