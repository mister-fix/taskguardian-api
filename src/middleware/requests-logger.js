/**
 * API HTTP Requests logger recording all requests handled by the server.
 * @module middleware/requests-logger
 * @requires winston
 * @requires express-winston
 */

/**
 * Winston, a Node.js logging package.
 * @external winston
 * @see {@link https://github.com/winstonjs/winston/|Winston Documentation}
 * @description This package is used to create and manage a custom API logging module that is fast, minimal, and production ready.
 * @constant
 */
const winston = require('winston');

/**
 * Express-Winston, an Express.js middleware for WinstonJS logging.
 * @external express-winston
 * @see {@link https://github.com/bithavoc/express-winston}
 * @description This module is an Express.js middleware that simplifies logging HTTP requests in your application.
 * @constant
 */
const expressWinston = require('express-winston');

// Import necessary methods and objects from the 'winston' logging library
// - 'createLogger' is used to create a new logger instance
// - 'format' provides tools to format log messages
// - 'transports' handles different types of log outputs (e.g., file, console)
const { createLogger, format, transports } = require('winston');

// Import custom logging format
const expressWinstonFormat = require('@config/express-winston-format');

/**
 * @name winstonExpressLogger
 * @description Middleware that tracks and logs all HTTP requests performed by users and saves them to a dedicated log file.
 * This middleware uses Winston transports to log to multiple files, supports different log formats (e.g., JSON, colored),
 * and provides additional metadata about each request.
 * @constant
 * @returns {void} - Calls the next middleware or sends an error response.
 */
const winstonExpressLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: 'logs/requests.log',
    }),
    new winston.transports.File({
      filename: './logs/combined.log', // Log file path for combined logs
    }),
  ],
  format: winston.format.combine(
    winston.format.colorize(), // Colorizes the output in the console
    winston.format.json(), // Formats the logs in JSON for better readability
    expressWinstonFormat, // Apply custom formatting for logs
  ),
  meta: true, // Controls whether to log metadata about each request (default: true)
  msg: 'HTTP {{req.method}} {{req.url}}', // Custom logging message for each HTTP request.
  expressFormat: true, // Uses default Express/morgan request formatting for more readable logs.
  colorize: false, // Controls text and status code colors based on Express/morgan color palette.

  /**
   * Ignore specific routes based on request/response.
   * You can customize this function to skip logging for certain routes.
   * Example: Return true to skip logging for static files or health check endpoints.
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @returns {boolean} - Return true to skip logging this route, false to log it.
   */
  ignoreRoute: function (req, res) {
    return false; // Always logs by default. Customize this to skip specific routes if needed.
  },
});

// Exporting middleware
module.exports = winstonExpressLogger;
