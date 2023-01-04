const { validationResult } = require("express-validator");
const db = require("../database/models");
const Product = db.Product;
const Category = db.Category;
const Discount = db.Discount;

const controller = {
  
  detail: async function (req, res) {
   
    const product = await db.Product.findByPk(req.params.id)
    
    res.render("product-detail", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-detail.css",
      product: product,
    });
  },

  create: function (req, res) {

    let discount = Discount.findAll();
    let category = Category.findAll();

    Promise.all([discount, category])
    .then(([discount, category]) => {
      res.render('product-form-create', {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-form.css",
      discount: discount, 
      category: category})
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

  edit: function (req, res) {

    let category = Category.findAll();
    let discount = Discount.findAll();
    let product = Product.findByPk(req.params.id);

    Promise.all([product,discount, category])
    .then(([product,discount, category]) => {

      console.log(product.dataValues)
      res.render('product-form-edit', {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-form.css",
      discount: discount, 
      category: category,
      product:product
    })
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

  list: function (req, res) {
    let categories = Category.findAll();
    let discounts = Discount.findAll();
    let products = Product.findAll();

    Promise.all([products,discounts, categories])
    .then(([products,discounts, categories]) =>  {
      
      console.log(discounts)
      res.render("product-list", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-list.css",
      products: products,
      discount : discounts,
      category : categories
    })} )


   
  },
};
module.exports = controller;
