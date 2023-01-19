const { validationResult } = require("express-validator");
const { where } = require("sequelize");
const db = require("../database/models");
const Product = db.Product;
const Category = db.Category;
const Discount = db.Discount;

const controller = {
  
  detail: async function (req, res) {

   
    const product = await db.Product.findByPk(req.params.id, {include:['discount', 'category']})
    
    res.render("product-detail", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-detail.css",
      product: product
    });
  },

  create: function (req, res) {

    let discount = Discount.findAll();
    let category = Category.findAll();
    console.log(discount)

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
    let discount = Discount.findAll();
    let category = Category.findAll();
    console.log(discount)

    Promise.all([discount, category])
    .then(([discount, category]) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
      console.log(error);
      return res.render("product-form-create", {
        errors: error.mapped(),
        title: "Ghemma Store - Tienda Oficial",
        css: "/product-form.css",
        discount:discount,
        category:category
      });
    } else {

      console.log(req.file.filename)


    db.Product.create({
      name: req.body.name,
      color: req.body.color,
      description: req.body.description,
      price: req.body.price,
      category_id: req.body.category,
      image: req.file.filename,
      discount_id: req.body.discount,
    })
      res.redirect("/");
    
  }})},

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

    const error = validationResult(req);

    let category = Category.findAll();
    let discount = Discount.findAll();
    let product = Product.findByPk(req.params.id);

    Promise.all([product,discount, category])
    .then(([product,discount, category]) => {

    if (!error.isEmpty()) {
      console.log(error);
      return res.render("product-form-edit", {
        errors: error.mapped(),
        title: "Ghemma Store - Tienda Oficial",
        css: "/product-form.css",
        product,
        discount,
        category
      });
    } else { Product.update(
      {
        name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        color: req.body.color,
        discount_id: req.body.discount,
        category_id: req.body.category,
        image: req.file?.filename ? req.file.filename : product.image,
      },
      {
        where: { id: req.params.id },
      }
    ).then(() => {
      res.redirect("/");
    });}});

   
  },

  delete: function (req, res) {
    Product.destroy({

      where: {id:req.params.id}, force: true

    })
    .then(() => {
      res.redirect('/')
    })
  },

  list: function (req, res) {
    let categories = Category.findAll();
    let discounts = Discount.findAll();
    let products = Product.findAll({include:['discount', 'category']});

    Promise.all([products,discounts, categories])
    .then(([products,discounts, categories]) =>  {
      
      console.log(discounts)
      console.log(products)
      res.render("product-list", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/product-list.css",
      title:"Nuestras Productos",
      products: products,
      category : categories
    })} )


   
  },

  listSmartphones: function (req, res) {
    let categories = Category.findAll();
    let discounts = Discount.findAll();
    let products = Product.findAll({ where:{category_id: 1}, include:['discount', 'category']});

    Promise.all([products,discounts, categories])
    .then(([products,discounts, categories]) =>  {
      
      console.log(discounts)
      console.log(products)
      res.render("product-list", {
      title: "Ghemma Store - Tienda Oficial - Smartphones",
      css: "/product-list.css",
      titlelist:"Nuestros Smartphones",
      products: products,
      category : categories,
      discount : discounts
    })} )
},

listTvs: function (req, res) {
  let categories = Category.findAll();
  let discounts = Discount.findAll();
  let products = Product.findAll({ where:{category_id: 5}, include:['discount', 'category']});

  Promise.all([products,discounts, categories])
  .then(([products,discounts, categories]) =>  {
    
    console.log(discounts)
    console.log(products)
    res.render("product-list", {
    title: "Ghemma Store - Tienda Oficial - Tvs",
    css: "/product-list.css",
    titlelist:"Nuestros Tvs",
    products: products,
    category : categories,
    discount: discounts
  })} )
},

listTablets: function (req, res) {
  let categories = Category.findAll();
  let discounts = Discount.findAll();
  let products = Product.findAll({ where:{category_id: 6}, include:['discount', 'category']});

  Promise.all([products,discounts, categories])
  .then(([products,discounts, categories]) =>  {
    
    console.log(discounts)
    console.log(products)
    res.render("product-list", {
    title: "Ghemma Store - Tienda Oficial - Tablets",
    css: "/product-list.css",
    titlelist:"Nuestras Tablets",
    products: products,
    category : categories,
    discount : discounts
  })} )
},

listNotebooks:function (req, res) {
  let categories = Category.findAll();
  let discounts = Discount.findAll();
  let products = Product.findAll({ where:{category_id: 2}, include:['discount', 'category']});

  Promise.all([products,discounts, categories])
  .then(([products,discounts, categories]) =>  {
    
    console.log(categories)
   
    res.render("product-list", {
    title: "Ghemma Store - Tienda Oficial - Notebooks",
    css: "/product-list.css",
    titlelist:"Nuestras Notebooks",
    products: products,
    category : categories,
    discount: discounts
  })} )
},

listSmartwatchs:function (req, res) {
  let categories = Category.findAll();
  let discounts = Discount.findAll();
  let products = Product.findAll({ where:{category_id: 3}, include:['discount', 'category']});

  Promise.all([products,discounts, categories])
  .then(([products,discounts, categories]) =>  {
    
    console.log(categories)
   
    res.render("product-list", {
    title: "Ghemma Store - Tienda Oficial - Smartwatchs",
    css: "/product-list.css",
    titlelist:"Nuestros Smartwatchs",
    products: products,
    category : categories,
    discount: discounts
  })} )
}

}


module.exports = controller;
