const fs = require('fs');
const path = require('path');

function findAll(){
    const data = fs.readFileSync(path.join(__dirname, "../data/user.json"));
    const jsonParsed = JSON.parse(data);
    return jsonParsed;
};

function writeFile(data){  
       const jsonStringed =  JSON.stringify(data, null, 5);
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

        const newUser = {
            id: data.length + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            password: req.body.password,
            category: req.body.category,
            profileImage: req.body.profileImage ? req.file.filename : "ImgPerfilDefault.png",
        };

            data.push(newUser);

            writeFile(data);

            res.redirect('/')
}
}
module.exports = controller