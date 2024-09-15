// Import the format function from 'date-fns' for date formatting
const { format } = require('date-fns');
// Import the v4 function from 'uuid' to generate unique identifiers
const { v4: uuid } = require('uuid');
// Import Winston library for logging
const winston = require('winston');

/**
 * @name customWinstonFormat
 * @description Custom Winston format for log messages
 * @constant
 */
const expressWinstonFormat = winston.format.printf((info) => {
  // Format log messages with timestamp, unique identifier, and log message
  return `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}\t${uuid()}\t${info.message}`;
});

// Exporting the custom Winston format for use in other modules
module.exports = expressWinstonFormat;
