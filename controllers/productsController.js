const { validationResult } = require("express-validator");
const db = require("../database/models");
const Product = db.Product;
const Category = db.Category;

const controller = {
  
  detail: async function (req, res) {
   
    const product = await db.Product.findByPk(req.params.id)
    
    res.render("product-detail", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-detail.css",
      product: product,
    });
  },

  create: async function (req, res) {
    

    res.render("product-form-create", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-form.css",
      categories: categories
    });
  },

  store: function (req, res) {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.render("product-form-create", {
        errors: error.mapped(),
        title: "Ghemma Store - Tienda Oficial",
        css: "/product-form.css",
      });
    } else {


    db.Product.create({
      name: req.body.name,
      color: req.body.color,
      description: req.body.description,
      price: req.body.price,
      category_id: req.body.category,
      image: req.file.filename,
      discount_id: req.body.discount,
    })
      res.redirect("/products/list");
    
  }},

  edit: async function (req, res) {

    let categories = await Category.findAll();
    
    const product = Product.findByPk(req.params.id).then((element) => {
      return element;
    });

    res.render("product-form-edit", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-form.css",
      product: product,
      categories: categories
    });
  },

  update: function (req, res) {
    if (!error.isEmpty()) {
      console.log(error);
      return res.render("product-form-create", {
        errors: error.mapped(),
        title: "Ghemma Store - Tienda Oficial",
        css: "/product-form.css",
      });
    }

    const product = Product.findByPk(req.params.id).then((element) => {
      return element;
    });

    Product.update(
      {
        name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        color: req.body.color,
        image: req.file?.filename ? req.file.filename : product.image,
      },
      {
        where: { id: req.params.id },
      }
    ).then(() => {
      res.redirect("/products/list");
    });
  },

  delete: function (req, res) {
    Product.destroy({

      where: {id:req.params.id}

    })
    .then(() => {
      res.redirect('/products/list')
    })
  },

  list: async function (req, res) {
    const products = await Product.findAll({include:['discount']});

    console.log(products.discount)

    res.render("product-list", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-list.css",
      products: products,
    });
  },
};
module.exports = controller;
