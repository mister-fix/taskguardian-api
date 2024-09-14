// Handles errors in async functions automatically
require('express-async-errors');

// Import third-party packages and middleware
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

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
app.use(cors());
app.use(helmet());

// Enable HTTP request logging to console with Morgan
app.use(morgan('tiny'));

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Mounting the root endpoint
app.use('/', (req, res) => {
  res.json({ message: '👋 Hello from the API!' });
});

// Export the Express application instance
module.exports = app;
