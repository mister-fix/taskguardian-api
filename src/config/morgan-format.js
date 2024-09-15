// Import the 'colors' package for adding color formatting to log messages
const colors = require('@colors/colors');

// Import the 'format' function from 'date-fns' to format timestamps
const { format } = require('date-fns');

// Import the 'morgan' HTTP request logger middleware for Node.js
const morgan = require('morgan');

// Import 'os' module to get system-related information, like the hostname
const os = require('os');

// Get the machine hostname (machine ID) to include it in the logs for identifying the source server
const machineID = os.hostname();

// Creating a custom 'timestamp' token for Morgan, which returns the current date and time in 'yyyy-mm-dd hh:mm:ss' format
morgan.token('timestamp', () => {
  return format(new Date(), 'yyyy-mm-dd hh:mm:ss');
});

/**
 * @name morganFormat
 * @description Custom logging format to use with 'morgan', works based on the 'NODE_ENV' variable the application is running on.
 * - In non-production environments, it includes colored output for better readability.
 * - In production environments, it uses a simpler format without colors for performance reasons.
 * @constant
 * @returns {string} - The Morgan logging format string
 */
const getMorganFormat = () => {
  // Check if the environment is not 'production'
  if (process.env.NODE_ENV !== 'production') {
    // Development format: includes a grey-colored timestamp, machine ID, process ID, and detailed HTTP request info with colors
    return `${colors.grey(':timestamp')} ${machineID} (${colors.brightYellow(process.pid)}) [${colors.brightCyan('REQ 🛜')}]: :method :url :status - :res[content-length] :response-time ms`;
  }

  // Production format: excludes colors and additional details, focusing on plain HTTP request info for performance and simplicity
  return ':method :url :status - :res[content-length] :response-time ms';
};

// Exporting the defined format so it can be used elsewhere in the application for HTTP request logging
module.exports = getMorganFormat;
