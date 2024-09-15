// Import allowed origins whitelist
const whitelist = require('./allowed-origins');

/**
 * @name corsOptions
 * @description CORS Options rules to be used with the 'cors' package.
 * @constant {object}
 */
const corsOptions = {
  // Define the origin callback function
  origin: (origin, callback) => {
    // Check if the origin is in the whitelist or if it's null
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // Allow the request if the origin is in the whitelist or is null
      callback(null, true);
    } else {
      // Otherwise, deny with an error
      callback(new Error(`Origin '${origin}' Not Allowed by CORS`));
    }
  },
  // Allow credentials (cookies, authorization headers) to be sent with requests
  credentials: true,
  // Set the status for successful preflight OPTIONS requests
  optionsSuccessStatus: 200,
};

// Exporting options to be used by the 'cors' module
module.exports = corsOptions;
