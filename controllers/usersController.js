const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')

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
    login: (req, res)=>{
        res.render("login", {title:'Ghemma Store - Tienda Oficial', css: '/login.css'});
    },
    register: (req, res)=>{
        res.render("register", {title:'Ghemma Store - Tienda Oficial', css: '/register.css'})
    },
    sendLogin: (req, res)=>{

        res.redirect("/")
    },
    createRegister: (req, res)=>{
    const data = findAll();
    console.log(req.body)

        const newUser = {
            id: data.length + 1,
            name: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.email,
            password: req.body.constraseña,//bcryptjs.hashSync(req.body.password, 10),
            categoria: req.body.categoria,
            profileImage: req.body.profileImage ? req.file.filename : "ImgPerfilDefault.png",
        
        };
        
            data.push(newUser);

            writeFile(data);

            res.redirect("/user/register")
}
}
module.exports = controller;