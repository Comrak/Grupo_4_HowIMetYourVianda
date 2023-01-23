
const path = require('path');
const fs = require('fs');
const { Op } = require("sequelize");
const db = require('../database/models');
const Products = db.Products;

//const productsFilePath = path.resolve('./models/productos.json')
//const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
const Math = require('Math')

// see all products
const renderProductAll = async (req, res,) => {
    const productos = await Products.findAll();
    return res.render('products/productAll',{jsProductos:productos})
}

// see a filter list of product
 const renderDetail= async (req, res,) => {
        const productId = req.params.id;
        const productFinded = await Products.findByPk(productId);
        // const productToFind = productos.find((product) => product.id == productId);
        if (productFinded == undefined) {
          return res.send("No existe el producto");
        }
        return res.render('products/detail', {productToFind: productFinded});
      }

const renderProductCreate = (req, res) => {
   return res.render('products/productManagement')
}

const renderProductRegistration = async (req, res) => {

    const camposDeNuevoProducto = req.body;
    camposDeNuevoProducto.image = '/img/productos/'+req.file.filename;
    // camposDeNuevoProducto.tags = req.body.tags.trim().split(',')
    const newProduct= await Products.create(camposDeNuevoProducto)
    return res.redirect('/products');
}

const renderProductEdit = async (req, res) => {

    const productId = req.params.id;
    const productToEdit = await Products.findByPk(productId);
    // productToEdit.tags = productToEdit.tags.join(';').split(';') ;


    if(productToEdit==undefined){	
        return res.render('error')
        }
        
        return res.render('products/productEdit', {productToEdit:productToEdit, req:req} )
}

const renderProductUpdate = async (req, res) => {
    
    let id = req.params.id;
    const dataToUpdate = req.body;
    // dataToUpdate.tags = req.body.tags.trim().split(',') 
    
    // check if the user has uploaded a new image
    if (req.file != undefined) {
        dataToUpdate.image = '/img/productos/'+req.file.filename;
    }   
    // find the product in the database
    let productToUpdate = await Products.findByPk(id);
    // check if the product exists
    if (!productToUpdate) {
        return res.render('error');
    }
    // if exists then update the product
    productToUpdate = {
        ... productToUpdate,
        ... dataToUpdate,
    }

    const productUpdated = await Products.update(productToUpdate, {
        where: {
            id: id
        }
    });
    return res.redirect('/products');

     
}

const renderProductDelete = (req, res) => {
    let id = req.params.id;
	
    Products.destroy({
        where: {
            id: id
        }
    });
        return res.redirect('/products');
}



module.exports = { 
    renderProductAll,
    renderDetail,
    renderProductCreate,
    renderProductRegistration,
    renderProductEdit,
    renderProductUpdate,
    renderProductDelete
}