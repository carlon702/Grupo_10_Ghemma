const fs = require("fs");
const path = require("path");
const {validationResult} = require('express-validator');
const db = require('../database/models');
const Product = db.Product;




function findAll() {
  const data = fs.readFileSync(path.join(__dirname, "../data/products.json"));
  const jsonParsed = JSON.parse(data);
  return jsonParsed;
}

function writeFile(data) {
  const jsonStringed = JSON.stringify(data, null, 5);
  fs.writeFileSync(path.join(__dirname, "../data/Products.json"), jsonStringed);
}

const controller = {
  // 
  detail: function (req, res) {
    const data = findAll();
    const product = data.find(function (product) {
      return product.id == req.params.id;
    });

    res.render("product-detail", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-detail.css",
      product: product,
    });
  },

  create: function (req, res) {
    res.render("product-form-create", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-form.css",
    });
  },

  store: function (req, res) {
    
    const error = validationResult(req)
        if(!error.isEmpty()){
            console.log(error)
            return res.render("product-form-create", {errors: error.mapped(), title: 'Ghemma Store - Tienda Oficial' , css: '/product-form.css'})
        }
    
    
    const data = findAll();

    

    const newProduct = {
      id: data.length + 1,
      name: req.body.name,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      color: req.body.color,
      description: req.body.description,
      image: req.file ? req.file.filename : "airpods.jpg"
    };
    console.log(req.file)
    data.push(newProduct);
    writeFile(data); 

    db.Product.create({

      name: req.body.nombre,
      color:req.body.color,
      description: req.body.descripcion,
      price: req.body.precio,
      category_id: req.body.categoria,
      image: req.file.filename,
      discount_id: require.body.discount
      
  })
  .then(function(){

      res.redirect("/products/list");
    

  })
  },

  edit: function (req, res) {

    const data = findAll();
    const product = data.find(function (product) {
      return product.id == req.params.id;
    });

    res.render("product-form-edit", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-form.css",
      product: product,
    });
  },

  update: function (req, res) {
    if(!error.isEmpty()){
      console.log(error)
      return res.render("product-form-create", {errors: error.mapped(), title: 'Ghemma Store - Tienda Oficial' , css: '/product-form.css'})
  }
    const data = findAll();
    const product = data.find(function (product) {
      return product.id == req.params.id;
    });

    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.color = req.body.color;

    writeFile(data);

    res.redirect("/products/list");
  },

  delete: function (req, res) {
    const data = findAll();
    const product = data.find(function (product) {
      return product.id == req.params.id;
    });
    data.splice(product, 1);

    writeFile(data);

    res.redirect("/products/list");
  },

  list: async function (req, res) {

    const products = await Product.findAll();

    res.render("product-list", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-list.css",
      products: products,
    });

  },
};
module.exports = controller;
