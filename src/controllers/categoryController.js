const categoryService = require('../services/categoryService');

const getCategory = async (req, res) => {
  try {
    const { type } = req.body;
    const categories = await categoryService.getCategory(type);
    return res.status(200).json({message: 'GET_SUCCESS', 'category': categories});
  } catch (err) {
    console.error(err);
    return res.status(err.statusCode || 500).json({message: 'INTERNAL_SERVER_ERROR'});
  }
}

module.exports = { getCategory }