const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const sequelize = require("sequelize");
const db = require("../database/models");
const User = db.User;

const users = async function () {
  await User.findAll();
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
      password: bcryptjs.hashSync(req.body.password, 10),
      admin: function(){if(req.body.email=== "ghemma@gmail.com"){return 1} else{return 0}},
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

   sendLogin: 
   async (req,res)=>{
    const error = validationResult(req);
<<<<<<< HEAD

    if (!error.isEmpty()) {
      return res.render("login", {
        errors: error.mapped(),
        title: "Ghemma Store - Tienda Oficial",
        css: "/login.css",
      });
    }

    // const users = findAll();
    // const userFound = users.find(function (user) {
    //   return (
    //     user.email == req.body.email &&
    //     bcryptjs.compareSync(req.body.password, user.password)
    //   );
    // });

    // if (!userFound) {
    //   return res.render("login", {
    //     errorLogin: "Crendenciales invalidas",
    //     title: "Ghemma Store - Tienda Oficial",
    //     css: "/login.css",
    //   });
    // } else {
    //   req.session.usuarioLogueado = {
    //     id: userFound.id,
    //     name: userFound.name,
    //     email: userFound.email,
    //     profileImage: userFound.profileImage,
    //   };

    // console.log(req.session.usuarioLogueado);

    // if (req.body.remember) {
    //   res.cookie("recordame", userFound.id);
    // }

    const userFound = await User.findOne({ where: { email: req.body.email } });

    const user = userFound.dataValues;

    // console.log(user);

    if (bcryptjs.compareSync(req.body.password, user.password)) {
      req.session.usuarioLogeado = {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        admin: user.admin,
        profileImage: user.profileImage,
      };

      if (req.body.remember) {
        res.cookie("recordame", user.id); // cookie por 5 minutos
      }

      res.redirect("/");
    }
  },
=======
    
    if(!error.isEmpty()){ 
        return res.render("login" , 
        {title: "Ghemma Store - Tienda Oficial",
              css: "/login.css", errors: 'Password/email incorrecto' })
    }
    
    const userFound = await db.User.findOne({
        where: { email: req.body.email}
    })

    // const user = userFound.dataValues;

    if (userFound === null) { 
        res.render("login", 
        { title: "Ghemma Store - Tienda Oficial",
              css: "/login.css", errors: 'Email incorrecto' });

    } else { 
      console.log(userFound.dataValues)
      
        if (bcryptjs.compareSync(req.body.password, userFound.dataValues.password)) {
            
          req.session.loggedUser = {
                         id: userFound.dataValues.id,
                         name: userFound.dataValues.name,
                         lastName: userFound.dataValues.lastName,
                         email: userFound.dataValues.email,
                         admin: userFound.dataValues.admin,
                         profileImage: userFound.dataValues.profileImage
                   };
            if(req.body.remember){
                res.cookie('recordame', userFound.dataValues.id)
            } 
        
            res.redirect("/");
        } 
        else {
            
            res.render("login", 
            { title: "Ghemma Store - Tienda Oficial",
              css: "/login.css", errors: 'Password Incorrecto' });
        }
    }
},
  
  
  // async (req, res) => {
  //     const error = validationResult(req);
  //     if (!error.isEmpty()) {
  //       return res.render('login', {
  //         errors: error.mapped(),
  //         old: req.body
  //       });
  //     };
  //     const userFound =  await User.findOne({
  //       where: {
  //         email: req.body.email
  //       }
  //     });
  //     let user = userFound.dataValues

  //     console.log(user)
  //     console.log(req.body.password)

  //     if (!user) { 
  //       return res.render('login', { title: "Ghemma Store - Tienda Oficial",
  //       css: "/login.css", errors: 'Email incorrecto' });
  //     } else {
       
  //     const match =  await bcrypt.compare(req.body.password, user.password);
  //     console.log(match)
  
  //     if (!match) { 
  //       res.render('login', {title: "Ghemma Store - Tienda Oficial",
  //       css: "/login.css", errors: 'Password/email incorrecto' });
  //     } else {
  //       req.session.loggedUser = {
  //                 id: user.id,
  //                 name: user.name,
  //                 lastName: user.lastName,
  //                 email: user.email,
  //                 admin: user.admin,
  //                 profileImage: user.profileImage
                  
  //       };
  //       if (req.body.remember) {
  //         res.cookie('recordame', userFound.id);
  //       }
  //       res.redirect('/');
  //     }
  // }},
    
>>>>>>> 3299037a6385614382c9a4e0d6b015c364c34957

  logout: function (req, res) {

    req.session.destroy();
    res.clearCookie("recordame");

    res.redirect("/");
  },

  list: async function (req, res) {
    const users = await User.findAll();
    res.render("userList", { users: users });
  },

  profile: async function (req, res) {
    const user = await User.findByPk(req.params.id);

    res.render("userProfile", { user });
  },
};

module.exports = controller;
