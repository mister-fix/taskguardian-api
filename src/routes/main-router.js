/**
 * Express router providing user-related routes
 * @module routers/index
 * @requires express
 */

/**
 * @description Express module
 * @constant
 */
const express = require('express');

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @constant
 * @namespace indexRouter
 */
const router = express.Router();

/**
 * @name USE /
 * @summary Mounting the index API router.
 * @access public
 * @function
 * @memberof module:routers.index~index-router
 * @inner
 */
router.use('/', require('@routes/index-router'));

// Exporting main API router
module.exports = router;
