/**
 * API Logger providing useful logging methods.
 * @module utils/logger
 * @requires winston
 */

/**
 * Winston, a Node.js logging package.
 * @external winston
 * @see {@link https://github.com/winstonjs/winston/|Winston Documentation}
 * @description This package is used to create and manage a custom API logging module that is fast, minimal, and production ready.
 * @constant
 */
const winston = require('winston');

// Import 'winston' formatter that colorizes the timestamp in log messages
const winstonTimestampColorize = require('winston-timestamp-colorize');

// Import necessary methods and objects from the 'winston' logging library
// - 'createLogger' is used to create a new logger instance
// - 'format' provides tools to format log messages
// - 'transports' handles different types of log outputs (e.g., file, console)
const { createLogger, format, transports } = require('winston');

// Import the 'colors' package for adding color formatting to log messages
const colors = require('@colors/colors');

// Import the 'os' module to retrieve system-related information
const os = require('os');

// Get the machine hostname (machine ID)
const machineID = os.hostname();

// Define custom levels and colors
const customLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    success: 3,
    info: 4,
    verbose: 5,
    debug: 6,
  },
  colors: {
    fatal: 'white redBG',
    error: 'red',
    warn: 'yellow',
    success: 'brightGreen',
    info: 'white',
    verbose: 'magenta',
    debug: 'cyan',
  },
};

// Define custom level abbreviations
const levelAbbreviations = {
  fatal: 'FTL 💣',
  error: 'ERR 🔥',
  warn: 'WRN ⚠️',
  success: 'SUC ✅',
  info: 'INF ℹ️',
  verbose: 'VRB 📃',
  debug: 'DBG 🔎',
};

// Add custom colors to winston
winston.addColors(customLevels.colors);

// Define the console log format for the console transport
const consoleFormat = format.combine(
  format.splat(),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Adds timestamp
  winstonTimestampColorize({ color: 'grey' }),
  // format.align(),
  format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${machineID} (${colors.brightYellow(process.pid)}) [${level}]: ${message}`;
  }),
);

// Define the file log format for the file transport
const fileFormat = format.combine(
  format.splat(),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Adds timestamp
  // format.align(),
  format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${machineID} (${process.pid}) [${level}]: ${message}`;
  }),
);

/**
 * @name logger
 * @description Custom API logging function.
 * @function
 * @constant
 */
const logger = createLogger({
  levels: customLevels.levels,
  // Define the transports
  transports: [
    // Console transport with color formatting
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format((info) => {
          info.level = levelAbbreviations[info.level].toUpperCase();
          return info;
        })(),
        format.colorize(), // Adds color to the log level
        consoleFormat, // Apply common format with timestamp and message
      ),
    }),

    // Combined file transport (logs all levels)
    new transports.File({
      filename: './logs/combined.log',
      format: format.combine(
        format((info) => {
          info.level = levelAbbreviations[info.level].slice(0, 3).toUpperCase();
          return info;
        })(),
        fileFormat,
      ),
    }),

    // Info level transport
    new transports.File({
      filename: './logs/info.log',
      level: 'info', // Only logs of level 'info' will be written here
      format: format.combine(
        format((info) => {
          info.level = levelAbbreviations[info.level].slice(0, 3).toUpperCase();
          return info;
        })(),
        fileFormat,
      ),
    }),

    // Warning level transport
    new transports.File({
      filename: './logs/warnings.log',
      level: 'warn', // Only logs of level 'warn' and higher will be written here
      format: format.combine(
        format((info) => {
          info.level = levelAbbreviations[info.level].slice(0, 3).toUpperCase();
          return info;
        })(),
        fileFormat,
      ),
    }),

    // Error level transport
    new transports.File({
      filename: './logs/errors.log',
      level: 'error', // Only logs of level 'error' and higher will be written here
      format: format.combine(
        format((info) => {
          info.level = levelAbbreviations[info.level].slice(0, 3).toUpperCase();
          return info;
        })(),
        fileFormat,
      ),
    }),
  ],
});

// Example usage
/**
 * logger.fatal('This is a fatal message');
 * logger.error('This is an error message');
 * logger.warn('This is a warning message');
 * logger.success('This is a success message');
 * logger.info('This is an info message');
 * logger.verbose('This is a verbose message');
 * logger.debug('This is a debug message');
 */

// Exporting custom API logger for use in other parts of the application
module.exports = logger;
