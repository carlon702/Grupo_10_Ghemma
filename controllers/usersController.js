const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')

function findAll(){
    const data = fs.readFileSync(path.join(__dirname, "../data/user.json"));
    const jsonParsed = JSON.parse(data);
    console.log("data", data)
    return jsonParsed;
};

function writeFile(data){  
       const jsonStringed =  JSON.stringify(data, null, 6);
       fs.writeFileSync(path.join(__dirname, '../data/user.json'), jsonStringed)

}


const controller ={
    register: (req, res)=>{
        res.render("register", {title:'Ghemma Store - Tienda Oficial', css: '/register.css'})
    
    },
    createRegister: (req, res)=>{
        const error = validationResult(req)
        if(!error.isEmpty()){
            console.log(error)
            return res.render("register", {errors: error.mapped(), title: 'Ghemma Store - Tienda Oficial' , css: '/register.css'})
        }
        const data = findAll();
        console.log(req.body)
        
        const newUser = {
            id: data.length + 1,
            name: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password , 10),
            categoria: req.body.categoria,
            profileImage: req.file ? req.file.filename : "ImgPerfilDefault.png",
        
        };
        console.log(req.file)

            data.push(newUser);

            writeFile(data);

            res.redirect("/user/login")
    },
    login: (req, res)=>{
        res.render("login", {title:'Ghemma Store - Tienda Oficial', css: '/login.css'});
    },
    sendLogin: (req, res)=>{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.render("login", {errors: error.mapped(), title: 'Ghemma Store - Tienda Oficial' , css: '/login.css'})
            };
            const users = findAll();
            const userFound = users.find(function(user){
               return user.email == req.body.email && bcryptjs.compareSync (req.body.password, user.password)
            })
            if(!userFound){
                return res.render("login", {errorLogin: 'Crendenciales invalidas', title: 'Ghemma Store - Tienda Oficial' , css: '/login.css'});
            }else{
                req.session.usuarioLogueado ={
                    id: userFound.id,
                    name: userFound.nombre,
                    email: userFound.email,
                };
                if(req.body.remember){
                    res.cookie("recordame", userFound.id)
                }




                res.redirect("/")

            }
        

    },    
}

module.exports = controller;