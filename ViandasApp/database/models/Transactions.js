'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transactions.belongsTo(models.TransactionStatus,{
        as:'transactionStatus',
        foreignKey:'status_id'
      }),
      Transactions.belongsTo(models.TransactionType,{
        as:'transactionType',
        foreignKey:'type_id'
      }),
      Transactions.belongsTo(models.Currency,{
        as:'currency',
        foreignKey:'currency_id'
      }),
      Transactions.belongsTo(models.PaymentMethod,{
        as:'paymentMethod',
        foreignKey:'paymentMethod_id'
      }),
      Transactions.belongsTo(models.PaymentStatus,{
        as:'paymentStatus',
        foreignKey:'paymentStatus_id'
      })

    }
  }
  Transactions.init({
    date: DataTypes.DATE,
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    productQuantity: DataTypes.INTEGER,
    productPrice: DataTypes.DECIMAL,
    productTax: DataTypes.DECIMAL,
    transactionAmount: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    deliveryCharge: DataTypes.DECIMAL,
    paymentMethod_id: DataTypes.INTEGER,
    paymentStatus_id: DataTypes.INTEGER,
    transactionPaymentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transactions',
    tableName:'transaction'
  });
  return Transactions;
};