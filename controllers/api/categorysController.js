const db = require('../../database/models');
const Category = db.Category;

const controller = {
  listAll: async function (req, res) {
    const category = await Category.findAll();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(category);
  }
};

module.exports = controller;