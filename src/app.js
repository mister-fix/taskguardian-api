// Handles errors in async functions automatically
require('express-async-errors');

// Import third-party packages and middleware
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

// Import custom configuration modules
const getMorganFormat = require('@config/morgan-format');
const cspDirectives = require('@config/csp-directives');
const corsOptions = require('@config/cors-options');

// Import custom middleware
const unknownEndpoint = require('@middleware/unknown-endpoint');
const requestsLogger = require('@middleware/requests-logger');
const errorHandler = require('@middleware/error-handler');

// Initialize an Express application instance
const app = express();

// Set environment
app.set('env', process.env.NODE_ENV || 'development');

// Set JSON response formatting
app.set('json spaces', 2);

// Trust the first proxy
app.set('trust proxy', 1);

// Enable case-sensitive routing
app.set('case sensitive routing', true);

// Enable strict routing
app.set('strict routing', true);

// Disable ETag generation
app.set('etag', false);

// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));

// Enable CORS with custom options, and Helmet for security
app.use(cors(corsOptions));
app.use(helmet(cspDirectives));

// Enable HTTP request logging to console with Morgan
app.use(morgan(getMorganFormat()));

// Enable HTTP request logging to file with Winston
app.use(requestsLogger);

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Redirect root URL requests to the main API endpoint
app.get('/', (req, res) => {
  res.redirect('/api');
});

// Mounting the root endpoint
app.use('/api', require('@routes/main-router'));

// Register unknown endpoint middleware
app.use(unknownEndpoint);
// Register error handling middleware
app.use(errorHandler);

// Export the Express application instance
module.exports = app;
