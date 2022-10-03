
const fs = require('fs');
const path = require('path');

function findAll(){
    const data = fs.readFileSync(path.join(__dirname, "../data/products.json"));
    const jsonParsed = JSON.parse(data);
    return jsonParsed;
};

function writeFile(data){  
       const jsonStringed =  JSON.stringify(data, null, 5);
       fs.writeFileSync(path.join(__dirname, '../data/Products.json'), jsonStringed)

}










const controller = {

    detail: function(req, res) {
        const data = findAll();
        const product = data.find(function(product){
            return product.id == req.params.id;
        })
        res.render('product-detail', {title:'Ghemma Store - Tienda Oficial', css: '/product-detail.css', product: product})
    },

    create: function(req, res) {
        res.render('product-form-create', {title:'Ghemma Store - Tienda Oficial', css: '/product-form.css'})
    },

    store: function(req, res) {
        
        const data = findAll();

        const newProduct = {
            id: data.length + 1,
            name: req.body.name,
            price: Number(req.body.price),
            color: req.body.color,
            description: req.body.description,
            image: req.file.filename, 
        };

            data.push(newProduct);

            writeFile(data);

            res.redirect('/products/list')
    },
        
    edit: function(req, res) {
        const data = findAll();
        const product = data.find(function(product){
            return product.id == req.params.id;
        });


        res.render('product-form-edit', {title:'Ghemma Store - Tienda Oficial', css: '/product-form.css', product: product} )
    },

    update: function(req, res) {
        const data = findAll();
        const product = data.find(function(product){
            return product.id == req.params.id;
        });

        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.color = req.body.color;

        writeFile(data);

        res.redirect('/products/list');
    },

    delete: function(req, res) {
        const data = findAll();
        const product = data.find(function(product){
            return product.id == req.params.id;
        });
        data.splice(product, 1);

        writeFile(data);

        res.redirect('/products/list');

    },

    list: function(req, res) {
        const data = findAll();
        res.render('product-list', {title:'Ghemma Store - Tienda Oficial', css: '/product-list.css', products: data})
    },
};

module.exports = controller;