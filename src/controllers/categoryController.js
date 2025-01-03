const categoryService = require('../services/categoryService');
const error = require('../utils/error');
const { httpResponseHandler } = require('../utils/response');

const getCategory = async (req, res) => {
  try {
    const { type } = req.query;
    if (!type) {
      error.throwErr(400, 'KEY_ERROR');
    }
    const categories = await categoryService.getCategory(type);
    return httpResponseHandler.sendSuccessResponse(res, 200, 'GET', 'category', categories);
  } catch (err) {
    console.error(err);
    return res
      .status(err.statusCode || 500)
      .json({ message: err.message || 'INTERNAL_SERVER_ERROR' });
  }
};

module.exports = {
  getCategory,
};
