const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require('../database/models');
const User = db.User;

const users = async function() {
  await User.findAll()
};


function findAll() {
  const data = fs.readFileSync(path.join(__dirname, "../data/user.json"));
  const jsonParsed = JSON.parse(data);
  console.log("data", data);
  return jsonParsed;
}

function writeFile(data) {
  const jsonStringed = JSON.stringify(data, null, 6);
  fs.writeFileSync(path.join(__dirname, "../data/user.json"), jsonStringed);
}

const controller = {
  register: (req, res) => {
    res.render("register", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/register.css",
    });
  },

  createRegister: (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.render("register", {
        errors: error.mapped(),
        title: "Ghemma Store - Tienda Oficial",
        css: "/register.css",
      });
    }
    User.create({
      name: req.body.nombre,
      lastName: req.body.apellido,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      admin: 0,
      profileImage: req.file ? req.file.filename : "ImgPerfilDefault.png",
    });

    res.redirect("/user/login");
  },
  login: (req, res) => {

    res.render("login", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/login.css"
    });
  },

  sendLogin: async (req, res) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.render('login', {
          errors: error.mapped(),
          old: req.body
        });
      };
      const userFound =  await User.findOne({
        where: {
          email: req.body.email
        }
      });
      let user = userFound.dataValues

      if (!user) { 
        return res.render('login', { title: "Ghemma Store - Tienda Oficial",
        css: "/login.css", errors: 'Email incorrecto' });
      } else {
       
      const match = await bcrypt.compare(req.body.password, user?.password);
      console.log(match)
  
      if (!match) { 
        res.render('login', {title: "Ghemma Store - Tienda Oficial",
        css: "/login.css", errors: 'Password/email incorrecto' });
      } else {
        req.session.loggedUser = {
                  id: user.id,
                  name: user.name,
                  lastName: user.lastName,
                  email: user.email,
                  admin: user.admin,
                  profileImage: user.profileImage
                  
        };
        if (req.body.remember) {
          res.cookie('recordame', userFound.id);
        }
        res.redirect('/');
      }
  }},
    

  logout: function (req, res) {

    req.session.destroy();
    res.clearCookie("recordame");

    res.redirect("/");
  },


  list: async function(req, res) {

    const users = await User.findAll();
    res.render("userList", {users : users})
  },

  profile: async function(req, res) {
    const user = await User.findByPk(req.params.id);

    res.render("userProfile", {user})
    
  }
};

module.exports = controller;
