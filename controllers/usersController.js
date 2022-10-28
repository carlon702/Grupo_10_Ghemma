const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const cookieParser = require("cookie-parser");

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
  login: (req, res) => {
    res.render("login", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/login.css",
    });
  },
  register: (req, res) => {
    res.render("register", {
      title: "Ghemma Store - Tienda Oficial",
      css: "/register.css",
    });
  },
  sendLogin: (req, res) => {
    res.redirect("/");
  },
  createRegister: (req, res) => {
    const data = findAll();
    console.log(req.body);

    const newUser = {
      id: data.length + 1,
      name: req.body.nombre,
      lastName: req.body.apellido,
      password: bcryptjs.hashSync(req.body.contraseña, 10),
      // category: req.body.category,
      profileImage: req.body.profileImage
        ? req.file.filename
        : "ImgPerfilDefault.png",
    };
    console.log(newUser);

    data.push(newUser);

    writeFile(data);

    res.redirect("/user/register");
  },
};
module.exports = controller;
