/**
 * Express router providing user-related routes
 * @module routers/index
 * @requires express
 */

/**
 * express module
 * @constant
 */
const express = require('express');

// Import required controller
const controller = require('@controllers/index-controller');

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @constant
 * @namespace indexRouter
 */
const router = express.Router();

/**
 * @name GET /your-route-here
 * @summary Brief description of the GET request.
 * @description A more detailed explanation of what the GET request does.
 * @access public
 * @function
 * @memberof module:routers.index~index-router
 * @inner
 */
router.get('/', controller.getIndex);

// Export router to be used in other parts of the API
module.exports = router;
