const db = require('../../database/models');
const Product = db.Product;

const controller = {
  listAll: async function (req, res) {
    const products = await Product.findAll();
    res.set('Access-Control-Allow-Origin', '*');
    return res.status(200).json({products: products, count: products.length });
  },
  listDetailed: async function (req, res){
    const { id } = req.params
    const product = await Product.findOne({where: {id} })
    res.set('Access-Control-Allow-Origin', '*');
    res.json(product)
  }
};

module.exports = controller;
