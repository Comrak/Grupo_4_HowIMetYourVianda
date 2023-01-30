
const path = require('path');
const fs = require('fs');
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');
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
        console.log(req.query.searchText)
        const productId = req.query.searchText;
        let productFinded
        if(isNaN(productId)){
            productFinded = await Products.findOne({ where: { name: productId } });
        }else{
            productFinded = await Products.findByPk(productId);
        }
        console.log('entre a la llamada')
        //const productToFind = Products.find((product) => product.id == productId);
        if (productFinded == undefined) {
            const productos = await Products.findAll();
            return res.render('products/productAll',{jsProductos:productos})
        }
        return res.render('products/detail', {productToFind: productFinded});
        
      }

const renderProductCreate = (req, res) => {
   return res.render('products/productManagement')
}

const renderProductRegistration = async (req, res) => {

    const resultValidation = validationResult(req);
    

    if (!resultValidation.isEmpty()) {
        return res.render('products/productManagement', {
            errors: resultValidation.mapped(),
            oldData: req.body   
        });
    }

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
        
        return res.render('products/EditProduct', {productToEdit:productToEdit, req:req} )
}

const renderProductUpdate = async (req, res) => {
    
    let productId = req.params.id;
    const dataToUpdate = req.body;
    const productToEdit = await Products.findByPk(productId);

   

    const resultValidation = validationResult(req);


    
    if (!resultValidation.isEmpty()) {
        return res.render('products/Editproduct', {
            errors: resultValidation.mapped(),
            productId: productToEdit,
            
        });
    }


    // check if the user has uploaded a new image
    if (req.file != undefined) {
        dataToUpdate.image = '/img/productos/'+req.file.filename;
    }   
    // find the product in the database
    let productToUpdate = await Products.findByPk(productId);
    // check if the product exists
    if (!productToUpdate) {
        return res.render('error');
    }

    dataToUpdate.tags=dataToUpdate.tags.trim()
    dataToUpdate.description=dataToUpdate.description.trim()
    // if exists then update the product
    productToUpdate = {
        ... productToUpdate,
        ... dataToUpdate,
    }


    const productUpdated = await Products.update(productToUpdate, {
        where: {
            id: productId
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