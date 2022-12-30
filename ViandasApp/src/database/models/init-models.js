var DataTypes = require("sequelize").DataTypes;
var _adress = require("./adress");
var _city = require("./city");
var _country = require("./country");
var _currency = require("./currency");
var _paymentmethod = require("./paymentmethod");
var _paymentstatus = require("./paymentstatus");
var _products = require("./products");
var _taxes = require("./taxes");
var _transactions = require("./transactions");
var _transactionstatus = require("./transactionstatus");
var _transactiontype = require("./transactiontype");
var _userrol = require("./userrol");
var _users = require("./users");

function initModels(sequelize) {
  var adress = _adress(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var currency = _currency(sequelize, DataTypes);
  var paymentmethod = _paymentmethod(sequelize, DataTypes);
  var paymentstatus = _paymentstatus(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var taxes = _taxes(sequelize, DataTypes);
  var transactions = _transactions(sequelize, DataTypes);
  var transactionstatus = _transactionstatus(sequelize, DataTypes);
  var transactiontype = _transactiontype(sequelize, DataTypes);
  var userrol = _userrol(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  users.belongsTo(adress, { as: "adress", foreignKey: "adress_id"});
  adress.hasMany(users, { as: "users", foreignKey: "adress_id"});
  city.belongsTo(country, { as: "country", foreignKey: "country_id"});
  country.hasMany(city, { as: "cities", foreignKey: "country_id"});
  transactions.belongsTo(currency, { as: "currency", foreignKey: "currency_id"});
  currency.hasMany(transactions, { as: "transactions", foreignKey: "currency_id"});
  transactions.belongsTo(paymentmethod, { as: "paymentMethod", foreignKey: "paymentMethod_id"});
  paymentmethod.hasMany(transactions, { as: "transactions", foreignKey: "paymentMethod_id"});
  transactions.belongsTo(paymentstatus, { as: "paymentStatus", foreignKey: "paymentStatus_id"});
  paymentstatus.hasMany(transactions, { as: "transactions", foreignKey: "paymentStatus_id"});
  transactions.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(transactions, { as: "transactions", foreignKey: "product_id"});
  transactions.belongsTo(transactionstatus, { as: "status", foreignKey: "status_id"});
  transactionstatus.hasMany(transactions, { as: "transactions", foreignKey: "status_id"});
  transactions.belongsTo(transactiontype, { as: "type", foreignKey: "type_id"});
  transactiontype.hasMany(transactions, { as: "transactions", foreignKey: "type_id"});
  users.belongsTo(userrol, { as: "role", foreignKey: "role_id"});
  userrol.hasMany(users, { as: "users", foreignKey: "role_id"});
  transactions.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(transactions, { as: "transactions", foreignKey: "user_id"});

  return {
    adress,
    city,
    country,
    currency,
    paymentmethod,
    paymentstatus,
    products,
    taxes,
    transactions,
    transactionstatus,
    transactiontype,
    userrol,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
