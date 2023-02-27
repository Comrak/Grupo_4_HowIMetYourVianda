const path = require("path");
const { Op } = require("sequelize");

const fetch = require("node-fetch");

// const User = require('../models/User');

const db = require("../database/models");
const Users = db.Users;
const Country = db.Country;
const UserRol = db.UserRol;
const City = db.City;
const Address = db.Address;
const car = db.Carrito
const Products = db.Products
const { validationResult } = require("express-validator");
const { userInfo } = require("os");
const bcryptjs = require("bcryptjs");
const { response } = require("express");

//const renderHome = (req, res) => {
//   return res.render('home')
//}

//const renderAbout = (req, res) => {
//  return res.render('about')
//}
// ************************* User Create *************************
const register = async (req, res) => {
  const countries = await Country.findAll();
  const userRoles = await UserRol.findAll();

  return res.render("users/register", { countries, userRoles });
};
// ************************* User Create Process *************************
const processRegister = async (req, res) => {
  const countries = await Country.findAll();
  const userRoles = await UserRol.findAll();

  const resultValidation = validationResult(req);
  // check if there are errors
  if (!resultValidation.isEmpty()) {
    return res.render("users/register", {
      errors: resultValidation.mapped(), // los errores que contiene el objeto resultValidation
      oldData: req.body,
      countries,
      userRoles,
    });
  }

  // if all validations are ok then check if the user already exists
  let userInDB = await Users.findOne({
    where: { email: req.body.email }, // 'email' es el campo de la tabla 'users
  });

  if (userInDB) {
    return res.render("users/register", {
      errors: {
        email: {
          msg: "Este email ya está registrado",
        },
      },
      oldData: req.body,
      countries: countries,
      userRoles: userRoles,
    });
  }

  // if user is new then create the user in DB

  let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
  let hashedConfirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
  let userToCreate = {
    ...req.body,
    country_id: req.body.country,
    role_id: req.body.profile,
    avatar: req.file.filename,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
  };

  try {
    let userCreated = await Users.create(userToCreate);
    return res.redirect("login");
  } catch (error) {
    console.log(error);
  }
};

const login = (req, res) => {
  return res.render("users/login");
};
// ******************* Login Process *******************
const loginProcess = async (req, res) => {
  const loginResultValidation = validationResult(req);

  // check if there are errors
  if (!loginResultValidation.isEmpty()) {
    return res.render("users/login", {
      errors: loginResultValidation.mapped(),
      oldData: req.body,
    });
  }

  const bodyData = req.body;

  let userToLogin = await Users.findOne({
    where: { email: req.body.email },
    include: ["userCountry", "userRole"],
  });

  // ******************* check if user exists ************
  if (userToLogin) {
    // ****************** Check password *******************
    let passwordOK = bcryptjs.compareSync(req.body.password,userToLogin.password);
    if (passwordOK) {
      // elimino del objeto userToLogin la propiedad password
      delete userToLogin.password;
      delete userToLogin.confirmPassword;
      // mantener el usuario logeado en session
     
      req.session.userLogged = userToLogin;
      // si el usuario eligió recordarme
      if (req.body.rememberMe) {
        res.cookie("userEmail", req.body.userEmail, { maxAge: 1000 * 60 * 10 });
      }


      
       // redirigir a la pagina del usuario
       return res.redirect('/users/profile')
    }

    return res.render("users/login", {
      errors: {
        userPassword: {
          msg: "Esta Contraseña es incorrecta",
        },
      },
      oldData: bodyData,
    });
  } else {
    return res.render("users/login", {
      errors: {
        userEmail: {
          msg: "Este email no está registrado",
        },
      },
      oldData: bodyData,
    });
  }
};
// ******************** Profile *******************
const profile = async (req, res) => {
  const userId = req.session.userLogged.id;
  const addressList = await Address.findAll({
    include: ["city"],
    where: { user_id: userId },
  });

  // return res.send(addressList)
  return res.render("users/usersProfile", {
    user: req.session.userLogged,
    addressList: addressList,
  });
};
// ********************* Edit  **************************
const userEdit = async (req, res) => {
  const countries = await Country.findAll();
  const userRoles = await UserRol.findAll();

  return res.render("users/userEdit", {
    countries,
    userRoles,
    user: req.session.userLogged,
  });
};
// ********************* Edit Process *******************
const processEdit = async (req, res) => {
  let id = req.session.userLogged.id;
  const dataToUpdate = req.body;
  const countries = await Country.findAll();
  const userRoles = await UserRol.findAll();

  // check if the user has uploaded a new image
  if (req.file != undefined) {
    dataToUpdate.image = req.file.filename;
  }
  // find the user in the database
  let userToUpdate = await Users.findByPk(id);
  // check if the user exists
  if (!userToUpdate) {
    return res.render("error");
  }
  // check if the updated email already exist
  let userInDB = await Users.findOne({
    where: { email: req.body.email }, // 'email' es el campo de la tabla 'users
  });
  if (userInDB == null) {
  } else if (userInDB.id !== userToUpdate.id) {
    return res.render("users/userEdit", {
      errors: {
        email: {
          msg: "Este email ya está registrado",
        },
      },
      oldData: req.body,
      countries: countries,
      userRoles: userRoles,
      user: req.session.userLogged,
    });
  }

  // if exists then update the user
  let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
  let hashedConfirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
  let userUpdate = {
    ...req.body,
    country_id: req.body.country,
    role_id: req.body.profile,
    avatar: dataToUpdate.userImage,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
  };

  const userUpdated = await Users.update(userUpdate, {
    where: {
      id: id,
    },
  });
  return res.redirect("login");
};
// ***************************** Delete User **************************
const deleteUser = (req, res) => {
  let userToDelete = req.session.userLogged.id;
  Users.destroy({
    where: {
      id: userToDelete,
    },
  });
  return res.render("users/login");
};
// ***************************** Logout **************************
const logout = (req, res) => {
  res.clearCookie("userEmail");
  req.session.destroy();
  return res.redirect("/");
};
// ***************************** Carrito **************************
const carrito = async(req, res) => {
    const userId = req.params.id;
    const todosProductos = await Products.findAll()
    const carContent = await car.findAll({
      where: {
        [Op.or]: [
          { usuario: userId }
        ]
      }
    });
    let selectedproducts = []
    todosProductos.forEach(p => {
      carContent.forEach(r =>{
        console.log(r)
        if(r.producto == p.dataValues.id){
          selectedproducts.push(p)
        }
      })
    })
    let totalPrice = 0
    selectedproducts.forEach(e =>{
      totalPrice += Number(e.price)
    })
    const userToEdit = await Users.findByPk(userId);
    return res.render("users/carritoCompras", {
      oldData: userToEdit,
      jsProductos:selectedproducts,
      price:Number(totalPrice)
    });
};
// ***************************** Process Carrito **************************
const addCarrito = async (req, res) => {
  const userID = req.params.userID;
  const productID = req.params.productID;
  const carritoToCreate = await car.create({activo:true,producto:productID,usuario:userID})
  const productos = await Products.findAll();
  return res.render('products/productAll',{jsProductos:productos})
};
// ***************************** Address **************************
const address = async (req, res) => {
  const countries = await Country.findAll();
  const cities = await City.findAll();

  return res.render("users/address", { countries, cities });
};
// ***************************** Process Address **************************
const processAddress = async (req, res) => {
  const bodyInfo = req.body;
  const userId = req.session.userLogged.id;
  const addressResultValidation = validationResult(req);
  const countries = await Country.findAll();
  const cities = await City.findAll();

  if (!addressResultValidation.isEmpty()) {
    return res.render("users/address", {
      errors: addressResultValidation.mapped(), // los errores que contiene el objeto resultValidation
      oldData: req.body,
      countries: countries,
      cities: cities,
    });
  }

  // capture the address data from body

  bodyInfo.user_id = userId;

  let addressToCreate = { ...bodyInfo };

  try {
    // create address
    const addressCreated = await Address.create(addressToCreate);
  } catch (error) {
    console.log(error);
  }

  // find all addresses of the user
  const addressList = await Address.findAll({
    include: ["city"],
    where: { user_id: userId },
  });

  return res.render("users/usersProfile", {
    user: req.session.userLogged,
    addressList: addressList,
  });
};
// ***************************** Edit Address **************************
const editAddress = async (req, res) => {
  const countries = await Country.findAll();
  const cities = await City.findAll();
  const addressId = req.params.id;
  const addressToEdit = await Address.findByPk(addressId);
  return res.render("users/editAddress", { addressToEdit, countries, cities });
};
// ***************************** Process Edit Address **************************
const processEditAddress = async (req, res) => {
  const bodyInfo = req.body;
  const addressResultValidation = validationResult(req);
  const countries = await Country.findAll();
  const cities = await City.findAll();
  const userId = req.session.userLogged.id;
  const addressId = req.params.id;
  const addressToEdit = await Address.findByPk(addressId);

  if (!addressResultValidation.isEmpty()) {
    return res.render("users/editAddress", {
      errors: addressResultValidation.mapped(), // los errores que contiene el objeto resultValidation
      oldData: req.body,
      addressToEdit: addressToEdit,
      countries: countries,
      cities: cities,
    });
  }

  bodyInfo.user_id = userId;
  let addressToUpdate = { ...bodyInfo };

  try {
    // update address
    await Address.update(addressToUpdate, { where: { id: addressId } });
    // find all addresses of the user

    const addressList = await Address.findAll({
      include: ["city"],
      where: { user_id: userId },
    });

    return res.render("users/usersProfile", {
      user: req.session.userLogged,
      addressList: addressList,
    });
  } catch (error) {
    console.log(error);
  }
};
// ***************************** Delete Address **************************
const deleteAddress = async (req, res) => {
  const userId = req.session.userLogged.id;
  const addressId = req.params.id;

  await Address.destroy({ where: { id: addressId } });

  const addressList = await Address.findAll({
    include: ["city"],
    where: { user_id: userId },
  });

  return res.render("users/usersProfile", {
    user: req.session.userLogged,
    addressList: addressList,
  });
};

const editProfile = async (req, res) => {
  const userId = req.params.id;
  const countries = await Country.findAll();
  const userRoles = await UserRol.findAll();

  const userToEdit = await Users.findByPk(userId);
  return res.render("users/editUser", {
    oldData: userToEdit,
    userRoles,
    countries,
  });
};
// ***************************** Process Edit Profile **************************
const processEditProfile = async (req, res) => {
  const userId = req.session.userLogged.id;
  const countries = await Country.findAll();
  const userRoles = await UserRol.findAll();

  const resultValidation = validationResult(req);
  // check if there are errors
  if (!resultValidation.isEmpty()) {
    return res.render("users/editUser", {
      errors: resultValidation.mapped(), // los errores que contiene el objeto resultValidation
      oldData: req.body,
      countries,
      userRoles,
    });
  }

  let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
  let hashedConfirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
  let userToCreate = {
    ...req.body,
    country_id: req.body.country,
    role_id: req.body.profile,
    avatar: req.file.filename,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
  };

  try {
    let userCreated = await Users.update(userToCreate, {
      where: { id: userId },
    });

    const addressList = await Address.findAll({
      include: ["city"],
      where: { user_id: userId },
    });

    // return res.send(addressList)
    return res.render("users/usersProfile", {
      user: req.session.userLogged,
      addressList: addressList,
    });
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  register,
  processRegister,
  login,
  loginProcess,
  profile,
  logout,
  carrito,
  addCarrito,
  address,
  processAddress,
  editAddress,
  processEditAddress,
  deleteAddress,
  editProfile,
  processEditProfile,
};
