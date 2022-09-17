//

const controller = {
  //

  home: function (req, res) {
    res.render("home", {
      title: "Ghemma Store - Tienda oficial - Home",
      css: "/home.css",
    });
  },

  //
};

//

module.exports = controller;
