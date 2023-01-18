//

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
    res.render("cart", {
      title: "Ghemma Store - Tienda oficial",
      css: "/cart.css",
    });
  },

  //
};

//

module.exports = controller;
