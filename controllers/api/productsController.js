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
  }, 
  listByCategory: async function (req,res){
    const listSmartphones = await Product.findAll({ where:{category_id: 1}});
    const listNotebooks = await Product.findAll({ where:{category_id: 2}});
    const listSmartWatch = await Product.findAll({ where:{category_id: 3}});
    const listHeadPhones = await Product.findAll({ where:{category_id: 4}});
    const listTvs = await Product.findAll({ where:{category_id: 5}});
    const listTablets = await Product.findAll({ where:{category_id: 6}});


    res.set('Access-Control-Allow-Origin', '*');
    res.json({
      TotalSmartphones:listSmartphones.length,
      TotalSmartWatch: listSmartWatch.length,
      TotalHeadPhones: listHeadPhones.length,
      TotalTvs: listTvs.length,
      TotalTablets: listTablets.length,
      TotalNotebooks: listNotebooks.length
    })

  }
};

module.exports = controller;
