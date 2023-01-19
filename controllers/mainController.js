const { validationResult } = require("express-validator");
const db = require("../database/models");
const {Op}= require("sequelize")
const Product = db.Product;
const Category = db.Category;
const Discount = db.Discount;


const controller = {
  //

  home: function (req, res) {
    res.render("home", {
      title: "Ghemma Store - Tienda oficial - Home",
      css: "/home.css",
    });
  },
  homeDos: function (req, res) {
    res.render("homeDos", {
      title: "Ghemma Store - Tienda oficial - Home",
      css: "/homeDos.css",
    });
  },
  cart: function (req, res) {
    res.render('cart', {title: "Ghemma Store - Tienda oficial",
    css: "/cart.css",
  });
  },
  search: function(req, res){
    const products = Product.findAll({
      where: {
        name: {
          [Op.like]:'%'+ req.body.search + '%'
        }
      }
    }
    ).then(product => {return product})
    console.log(products)
    res.render('product-list', {
      title: "Ghemma Store - Tienda oficial",
      css: "/product-list.css", 
      products
    })
  }


  //
};

//

module.exports = controller;
