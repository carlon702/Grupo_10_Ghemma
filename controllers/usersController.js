const controller ={
    login: (req, res)=>{
        res.render("login", {title:'Ghemma Store - Tienda Oficial', css: '/login.css'});
    },
    register: (req, res)=>{
        res.render("register", {title:'Ghemma Store - Tienda Oficial', css: '/register.css'})
    }
}
module.exports = controller