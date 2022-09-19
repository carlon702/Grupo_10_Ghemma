const productos = [
    {id: 1,
        nombre: 'Airpods 69',
        modelo: 2000,
        marca: 'saffa',
        descripcion: 'saffa',
        color: 'saffa',
        precio: 2000,
        descuento: '15% Off'
    },
    {id:2,
        nombre: 'Airpods 69',
        modelo: 2000,
        marca: 'saffa',
        descripcion: 'saffa',
        color: 'saffa',
        precio: 2000,
        descuento: '20% Off'
    },
    {id: 3,
        nombre: 'Airpods 69',
        modelo: 2000,
        marca: 'saffa',
        descripcion: 'saffa',
        color: 'saffa',
        precio: 2000,
        descuento: '25% Off'
    },
    {id: 4,
        nombre: 'Airpods 69',
        modelo: 2000,
        marca: 'saffa',
        descripcion: 'saffa',
        color: 'saffa',
        precio: 2000,
        descuento: '35% Off'
    }
]











const controller = {
    detail: function(req, res) {
        res.render('product-detail', {title:'Ghemma Store - Tienda Oficial', css: '/product-detail.css'})
    },
    create: function(req, res) {
        res.render('product-form-create', {title:'Ghemma Store - Tienda Oficial', css: '/product-form.css'})
    },
    edit: function(req, res) {
        res.render('product-form-edit', {title:'Ghemma Store - Tienda Oficial', css: '/product-form.css'} )
    },
    list: function(req, res) {
        res.render('product-list', {title:'Ghemma Store - Tienda Oficial', css: '/product-list.css', productos: productos,})
    },
};

module.exports = controller;