
const path = require('path');
const fs = require('fs');

const productos = path.resolve('.src/database/models/products.js')
const Math = require('Math')

// see all products
const renderProductAll = (req, res,) => {
    const AllProducts = productos.findAll();
    return res.render('products/productAll',{jsProductos:AllProducts})
}

// see a filter list of product
const renderDetail= (req, res,) => {
    console.log(req.query.data)
    console.log(req.params.id)
    if(req.params.id == undefined || req.params.id == null || req.params.id == 'getDetail'){
        if(req.query.data == undefined || req.query.data == null ){
            console.log(`${req.query.data} es undefined `)
            return res.send("No existe el producto");
        }else{
            console.log('no salio el find')
            const productToFind = productos.find((product) => ((product.id == req.query.data)|| 
                                                                (product.name.match(req.query.data))));
            if (productToFind == undefined) {
                return res.send("No existe el producto");
            }
            return res.render('products/detail', {productToFind: productToFind})
        }
    }else{
        const productId = req.params.id;
        const productToFind = productos.find((product) => product.id == productId);
        if (productToFind == undefined) {
        return res.send("No existe el producto");
        }
        return res.render('products/detail', {productToFind: productToFind});
    }
    
}

const renderProductCreate = (req, res) => {
   return res.render('products/productManagement')
}

const renderProductRegistration = (req, res) => {

    const camposDeNuevoProducto = req.body;
    camposDeNuevoProducto.imagen = '/img/productos/'+req.file.filename;
    camposDeNuevoProducto.tags = req.body.tags.trim().split(',')

   
    // tomar el ultimo elemento del array y sumarle 1
    const ids = productos.map(object => {
        return object.id;
      });

    const maxId = Math.max(...ids);
                  
    camposDeNuevoProducto.id = maxId + 1;
    
    productos.push(camposDeNuevoProducto);

    fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
    return res.redirect('/products');
}

const renderProductEdit = (req, res) => {

    let id = req.params.id;
		
    let productToEdit = productos.find(product => product.id == id);
    productToEdit.tags = productToEdit.tags.join(';').split(';') ;


    if(productToEdit==undefined){	
        return res.render('error')
        }
        
        return res.render('products/productEdit', {productToEdit:productToEdit, req:req} )
}

const renderProductUpdate = (req, res) => {
    
    let id = req.params.id;
    const dataToUpdate = req.body;
    dataToUpdate.tags = req.body.tags.trim().split(',') 
    
    // check if the user has uploaded a new image
    if (req.file != undefined) {
        dataToUpdate.imagen = '/img/productos/'+req.file.filename;
    }   
    // find the product to update
    const productIndex = productos.findIndex(product => product.id == id);
    if (productIndex == -1) {
        return res.render('error');
    }
    productos[productIndex] = {
        ... productos[productIndex],
        ... dataToUpdate,
    }

    fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));

    return res.redirect('/products');

     
}

const renderProductDelete = (req, res) => {
    let id = req.params.id;
		
    const productIndex = productos.findIndex(product => product.id == id);
    if (productIndex == -1) {
        return res.render('error');
    }
        productos.splice(productIndex, 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
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