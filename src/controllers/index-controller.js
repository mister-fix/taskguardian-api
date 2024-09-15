/**
 * @name getIndex
 * @function
 * @constant
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @returns {JSON} - JSON object with status and response message.
 */
const getIndex = (req, res) => {
  return res.status(200).json({
    status: 200,
    message: '👋 Hello from the API!',
  });
};

// Exporting controller methods
module.exports = {
  getIndex,
};
