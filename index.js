// Register the 'module-alias' package to enable custom path aliases
require('module-alias/register');

// Load the environment variables from a '.env' file into process.env
require('dotenv').config();

// Import custom API logger
const logger = require('@utils/logger');

// Import the Express app instance
const app = require('@src/app');

// Configure the server host from the environment variables
const host = process.env.HOST ?? '0.0.0.0'; // '0.0.0.0' is production fallback

// Configure the server prot from the environment variables
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port and host
const server = app.listen(port, host);

/**
 * @event server#listening
 * @description Triggered when the server starts listening on the specified hort and port.
 */
server.on('listening', () => {
  // Log the successful server launch message
  logger.success(`server running on: http://${host}:${port}`);
});

/**
 * @event server#error
 * @description Triggered when an error occurs during the server's operation.
 * Common errors include binding issues (e.g., the port is already in use) or network-related issues.
 * @param {Error} err - The error object containing details a bout the error.
 */
server.on('error', (err) => {
  logger.error('server encountered an error:', err);
});

/**
 * @event server#close
 * @description Triggered when the server is about to be closed.
 * This could be due to an intentional shutdown, or after an error that causes the server to stop running.
 * We use this event to clean up resources, like closing database connections.
 */
server.on('close', async () => {
  logger.warn('server is closing, cleaning up resources...');
});

/**
 * @name handleShutdownSignal
 * @summary Handles SIGINT and SIGTERM signals for graceful shutdown.
 * @description This function is triggered when the application receives a shutdown signal (e.g., SIGINT or SIGTERM).
 * It performs the following steps:
 * 1. Closes the database connection.
 * 2. Closes the server.
 * 3. Adds a slight delay to ensure all logs and asynchronous tasks are completed before exiting the process.
 * @function
 * @async
 * @param {string} signal - The shutdown signal received (e.g., 'SIGINT' or 'SIGTERM').
 * @returns {Promise<void>} A Promise that resolves when the shutdown process is complete.
 */
const handleShutdownSignal = async (signal) => {
  logger.warn(`received ${signal}, shutting down server...`);

  // Close the server after the database is closed
  server.close(() => {
    logger.warn('server closed');

    // Set a slight delay to ensure logs are flushed before exiting
    setTimeout(() => {
      logger.warn('exiting process...');
      process.exit(0); // Exit the process safely
    }, 100);
  });
};

/**
 * @event process#SIGINT
 * @description SIGINT (Ctrl + C) signal handling. This signal is sent when the user manually interrupts the process using Ctrl + C in the terminal.
 * It's important to handle this signal to gracefully shut down the server, ensuring no active connections are dropped, and that resources are properly released.
 */
process.on('SIGINT', () => handleShutdownSignal('SIGINT'));

/**
 * @event process#SIGTERM
 * @description SIGTERM signal handling. This signal is sent by the operating system or an external service (e.g., Docker, Kubernetes).
 * It's commonly used in production environments. We handle this signal to gracefully stop the server and perform cleanup before shutting down.
 */
process.on('SIGTERM', () => handleShutdownSignal('SIGTERM'));
